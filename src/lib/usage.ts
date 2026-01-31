import { prisma } from '@/lib/prisma';
import { SubscriptionTier, PLAN_LIMITS } from '@/types/lead';

// Founder premium override for development/testing
const FOUNDER_EMAIL = 'samruddhitiwari003@gmail.com';
const FOUNDER_LIMIT = 100000;

export async function checkUsageLimit(userId: string): Promise<{
    allowed: boolean;
    remaining: number;
    limit: number;
    used: number;
    tier?: SubscriptionTier;
}> {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            email: true,
            subscriptionTier: true,
            leadsUsedThisMonth: true,
            usageResetDate: true,
        }
    });

    if (!user) {
        throw new Error('User not found');
    }

    // Founder premium override - unlimited for testing
    if (user.email === FOUNDER_EMAIL) {
        return {
            allowed: true,
            remaining: FOUNDER_LIMIT - user.leadsUsedThisMonth,
            limit: FOUNDER_LIMIT,
            used: user.leadsUsedThisMonth,
            tier: 'pro',
        };
    }

    // Check if we need to reset monthly usage
    const now = new Date();
    const resetDate = new Date(user.usageResetDate);
    const monthsSinceReset = (now.getFullYear() - resetDate.getFullYear()) * 12
        + now.getMonth() - resetDate.getMonth();

    if (monthsSinceReset >= 1) {
        // Reset usage for new month
        await prisma.user.update({
            where: { id: userId },
            data: {
                leadsUsedThisMonth: 0,
                usageResetDate: now,
            }
        });

        const limit = PLAN_LIMITS[user.subscriptionTier as SubscriptionTier] || PLAN_LIMITS.free;
        return {
            allowed: true,
            remaining: limit,
            limit,
            used: 0,
            tier: user.subscriptionTier as SubscriptionTier,
        };
    }

    const tier = user.subscriptionTier as SubscriptionTier;
    const limit = PLAN_LIMITS[tier] || PLAN_LIMITS.free;
    const used = user.leadsUsedThisMonth;
    const remaining = Math.max(0, limit - used);

    return {
        allowed: remaining > 0,
        remaining,
        limit,
        used,
        tier,
    };
}

export async function incrementUsage(userId: string, count: number): Promise<void> {
    await prisma.user.update({
        where: { id: userId },
        data: {
            leadsUsedThisMonth: {
                increment: count
            }
        }
    });
}

export async function getUserSubscription(userId: string) {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            subscriptionTier: true,
            dodoCustomerId: true,
            dodoSubscriptionId: true,
            leadsUsedThisMonth: true,
            usageResetDate: true,
        }
    });

    return user;
}
