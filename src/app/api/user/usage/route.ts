import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { checkUsageLimit } from '@/lib/usage';

export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        // Get current usage (includes founder premium override)
        const usage = await checkUsageLimit(session.user.id);

        return NextResponse.json({
            tier: usage.tier || 'free',
            used: usage.used,
            limit: usage.limit,
            remaining: usage.remaining,
        });
    } catch (error) {
        console.error('Usage fetch error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch usage' },
            { status: 500 }
        );
    }
}
