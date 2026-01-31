import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { createCheckoutSession, DODO_PRODUCTS } from '@/lib/dodo';
import { SubscriptionTier } from '@/types/lead';

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.id || !session?.user?.email) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { plan } = await request.json() as { plan: SubscriptionTier };

        if (!plan || plan === 'free') {
            return NextResponse.json(
                { error: 'Invalid plan' },
                { status: 400 }
            );
        }

        const productId = DODO_PRODUCTS[plan as keyof typeof DODO_PRODUCTS];

        if (!productId) {
            return NextResponse.json(
                { error: 'Product not configured' },
                { status: 400 }
            );
        }

        const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';

        const checkoutSession = await createCheckoutSession(
            productId,
            session.user.email,
            `${baseUrl}/dashboard/billing?success=true`,
            `${baseUrl}/dashboard/billing?cancelled=true`
        );

        return NextResponse.json({
            checkoutUrl: checkoutSession.url,
        });
    } catch (error) {
        console.error('Checkout error:', error);
        return NextResponse.json(
            { error: 'Failed to create checkout session' },
            { status: 500 }
        );
    }
}
