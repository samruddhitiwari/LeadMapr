import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { searchPlaces } from '@/lib/google-places';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        let body;
        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                { error: 'Invalid JSON body' },
                { status: 400 }
            );
        }

        const { keyword, location } = body;

        if (!keyword || !location) {
            return NextResponse.json(
                { error: 'Keyword and location are required' },
                { status: 400 }
            );
        }

        // Search Google Places
        let leads;
        try {
            leads = await searchPlaces(keyword, location);
        } catch (placesError) {
            console.error('Google Places API error:', placesError);
            const errorMessage = placesError instanceof Error ? placesError.message : 'Unknown error';
            return NextResponse.json(
                { error: `Failed to search places: ${errorMessage}` },
                { status: 502 }
            );
        }

        // Store in session for later filtering/export
        try {
            await prisma.leadSession.create({
                data: {
                    userId: session.user.id,
                    keyword,
                    location,
                    leads: JSON.stringify(leads),
                }
            });
        } catch (dbError) {
            console.error('Database error:', dbError);
            // Continue anyway - leads were fetched successfully
        }

        return NextResponse.json({
            leads,
            count: leads.length,
        });
    } catch (error) {
        console.error('Search error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json(
            { error: `Failed to search leads: ${errorMessage}` },
            { status: 500 }
        );
    }
}
