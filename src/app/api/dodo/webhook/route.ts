import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

// Verify webhook signature
function verifyWebhookSignature(
    payload: string,
    signature: string,
    secret: string
): boolean {
    const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(payload)
        .digest('hex');

    return crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(expectedSignature)
    );
}

export async function POST(request: NextRequest) {
    try {
        const payload = await request.text();
        const signature = request.headers.get('x-dodo-signature') || '';
        const webhookSecret = process.env.DODO_WEBHOOK_SECRET || '';

        // Verify signature (optional but recommended)
        if (webhookSecret && signature) {
            const isValid = verifyWebhookSignature(payload, signature, webhookSecret);
            if (!isValid) {
                return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
            }
        }

        const event = JSON.parse(payload);
        const eventType = event.type;

        console.log('Dodo webhook received:', eventType);

        switch (eventType) {
            case 'subscription.created':
            case 'subscription.active': {
                const subscription = event.data;
                const customerEmail = subscription.customer?.email;
                const subscriptionId = subscription.id;
                const productId = subscription.product_id;

                // Map product ID to tier
                let tier = 'starter';
                if (productId === process.env.DODO_PRODUCT_PRO) {
                    tier = 'pro';
                } else if (productId === process.env.DODO_PRODUCT_AGENCY) {
                    tier = 'agency';
                }

                if (customerEmail) {
                    await prisma.user.update({
                        where: { email: customerEmail },
                        data: {
                            subscriptionTier: tier,
                            dodoSubscriptionId: subscriptionId,
                            dodoCustomerId: subscription.customer?.id,
                        },
                    });
                }
                break;
            }

            case 'subscription.renewed': {
                const subscription = event.data;
                const customerEmail = subscription.customer?.email;

                // Reset monthly usage on renewal
                if (customerEmail) {
                    await prisma.user.update({
                        where: { email: customerEmail },
                        data: {
                            leadsUsedThisMonth: 0,
                            usageResetDate: new Date(),
                        },
                    });
                }
                break;
            }

            case 'subscription.cancelled':
            case 'subscription.expired': {
                const subscription = event.data;
                const customerEmail = subscription.customer?.email;

                // Downgrade to free
                if (customerEmail) {
                    await prisma.user.update({
                        where: { email: customerEmail },
                        data: {
                            subscriptionTier: 'free',
                            dodoSubscriptionId: null,
                        },
                    });
                }
                break;
            }

            default:
                console.log('Unhandled webhook event:', eventType);
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        console.error('Webhook error:', error);
        return NextResponse.json(
            { error: 'Webhook processing failed' },
            { status: 500 }
        );
    }
}
