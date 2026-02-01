import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { generateCSV, generateExcel, generateWhatsApp } from '@/lib/export';
import { checkUsageLimit, incrementUsage } from '@/lib/usage';
import { Lead, ExportFormat } from '@/types/lead';

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { leads, format, messageTemplate } = await request.json() as {
            leads: Lead[];
            format: ExportFormat;
            messageTemplate?: string;
        };

        if (!leads || !Array.isArray(leads) || leads.length === 0) {
            return NextResponse.json(
                { error: 'No leads to export' },
                { status: 400 }
            );
        }

        // Check usage limits
        const usage = await checkUsageLimit(session.user.id);

        if (!usage.allowed) {
            return NextResponse.json(
                {
                    error: 'Monthly lead limit reached',
                    usage: {
                        used: usage.used,
                        limit: usage.limit,
                    }
                },
                { status: 403 }
            );
        }

        // Check if export would exceed limit
        if (leads.length > usage.remaining) {
            return NextResponse.json(
                {
                    error: `Export would exceed monthly limit. You have ${usage.remaining} leads remaining.`,
                    usage: {
                        used: usage.used,
                        limit: usage.limit,
                        remaining: usage.remaining,
                    }
                },
                { status: 403 }
            );
        }

        let content: string | Buffer;
        let contentType: string;
        let filename: string;

        switch (format) {
            case 'csv':
                content = generateCSV(leads);
                contentType = 'text/csv';
                filename = `leads-${Date.now()}.csv`;
                break;

            case 'xlsx':
                content = generateExcel(leads);
                contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                filename = `leads-${Date.now()}.xlsx`;
                break;

            case 'whatsapp':
                content = generateWhatsApp(leads, messageTemplate);
                contentType = 'text/tab-separated-values';
                filename = `leads-whatsapp-${Date.now()}.tsv`;
                break;

            default:
                return NextResponse.json(
                    { error: 'Invalid format' },
                    { status: 400 }
                );
        }

        // Increment usage
        await incrementUsage(session.user.id, leads.length);

        // Return file - convert Buffer to Uint8Array for NextResponse compatibility
        const responseBody = typeof content === 'string' ? content : new Uint8Array(content);
        return new NextResponse(responseBody, {
            headers: {
                'Content-Type': contentType,
                'Content-Disposition': `attachment; filename="${filename}"`,
            },
        });
    } catch (error) {
        console.error('Export error:', error);
        return NextResponse.json(
            { error: 'Failed to export leads' },
            { status: 500 }
        );
    }
}
