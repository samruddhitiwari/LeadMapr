'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { PLAN_LIMITS, PLAN_PRICES, SubscriptionTier } from '@/types/lead';

interface UsageData {
    tier: SubscriptionTier;
    used: number;
    limit: number;
    remaining: number;
}

export default function BillingPage() {
    const searchParams = useSearchParams();
    const success = searchParams.get('success');
    const cancelled = searchParams.get('cancelled');

    const [usage, setUsage] = useState<UsageData>({
        tier: 'free',
        used: 0,
        limit: 50,
        remaining: 50,
    });
    const [isLoading, setIsLoading] = useState(true);
    const [waitlistEmail, setWaitlistEmail] = useState('');
    const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

    // Fetch real usage from API
    useEffect(() => {
        fetchUsage();
    }, []);

    const fetchUsage = async () => {
        try {
            const res = await fetch('/api/user/usage');
            if (res.ok) {
                const data = await res.json();
                setUsage(data);
            }
        } catch (error) {
            console.error('Failed to fetch usage:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleWaitlist = () => {
        // Placeholder - would submit to API
        setWaitlistSubmitted(true);
    };

    const plans = [
        { id: 'free' as const, name: 'Free', price: 0, leads: PLAN_LIMITS.free },
        { id: 'starter' as const, name: 'Starter', price: PLAN_PRICES.starter, leads: PLAN_LIMITS.starter },
        { id: 'pro' as const, name: 'Pro', price: PLAN_PRICES.pro, leads: PLAN_LIMITS.pro },
        { id: 'agency' as const, name: 'Agency', price: PLAN_PRICES.agency, leads: PLAN_LIMITS.agency },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-brutal-black text-white py-4 px-6">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/dashboard" className="text-2xl font-bold font-heading text-brutal-yellow">
                        LeadMapr
                    </Link>
                    <Link href="/dashboard" className="text-white/80 hover:text-white">
                        ← Back to Dashboard
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-6 py-8 max-w-4xl">
                {success && (
                    <div className="bg-green-100 border-3 border-green-500 p-4 mb-6 text-green-700 font-medium">
                        ✓ Payment successful! Your plan has been upgraded.
                    </div>
                )}

                {cancelled && (
                    <div className="bg-yellow-100 border-3 border-yellow-500 p-4 mb-6 text-yellow-700 font-medium">
                        Payment was cancelled. You can try again when ready.
                    </div>
                )}

                {/* Current Plan & Usage */}
                <div className="bg-white border-4 border-brutal-black p-6 shadow-brutal mb-8">
                    <h1 className="text-2xl font-bold font-heading mb-4 text-black">Billing & Usage</h1>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-brutal-yellow border-3 border-brutal-black">
                            <div className="text-sm font-bold mb-1 text-black">Current Plan</div>
                            <div className="text-3xl font-bold uppercase text-black">
                                {isLoading ? '...' : usage.tier}
                            </div>
                        </div>

                        <div className="p-4 bg-gray-100 border-3 border-brutal-black">
                            <div className="text-sm font-bold mb-1 text-black">Monthly Usage</div>
                            <div className="text-3xl font-bold text-black">
                                {isLoading ? '...' : `${usage.used} / ${usage.limit}`}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">Resets every month</div>
                            <div className="mt-2 bg-gray-300 h-3 rounded-none">
                                <div
                                    className="bg-brutal-green h-full transition-all"
                                    style={{ width: `${Math.min((usage.used / usage.limit) * 100, 100)}%` }}
                                />
                            </div>
                            <div className="text-sm text-gray-600 mt-2">
                                {usage.remaining} exports remaining this month
                            </div>
                        </div>
                    </div>
                </div>

                {/* Plans */}
                <h2 className="text-xl font-bold font-heading mb-4 text-black">Available Plans</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {plans.map((plan) => {
                        const isCurrentPlan = usage.tier === plan.id;

                        return (
                            <div
                                key={plan.id}
                                className={`border-4 border-brutal-black p-6 ${isCurrentPlan
                                        ? 'bg-brutal-yellow shadow-brutal-xl ring-4 ring-brutal-black ring-offset-2'
                                        : 'bg-white shadow-brutal'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold font-heading text-black">{plan.name}</h3>
                                        <div className="text-3xl font-bold mt-1 text-black">
                                            ${plan.price}<span className="text-base font-normal text-gray-600">/mo</span>
                                        </div>
                                    </div>
                                    {isCurrentPlan && (
                                        <span className="bg-brutal-black text-brutal-yellow px-3 py-1 text-sm font-bold">
                                            CURRENT
                                        </span>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <span className="text-lg font-bold text-black">{plan.leads.toLocaleString()}</span>
                                    <span className="text-gray-600"> leads/month</span>
                                </div>

                                {isCurrentPlan ? (
                                    <div className="text-center py-3 text-gray-700 font-medium bg-gray-100 border-2 border-gray-300">
                                        ✓ Your current plan
                                    </div>
                                ) : plan.id === 'free' ? (
                                    <div className="text-center py-3 text-gray-500 font-medium">
                                        Free tier
                                    </div>
                                ) : (
                                    <button
                                        disabled
                                        className="w-full py-3 bg-gray-200 border-3 border-gray-400 text-gray-600 font-bold cursor-not-allowed"
                                    >
                                        🚧 Coming Soon
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Waitlist Section */}
                <div className="mt-8 bg-brutal-blue border-4 border-brutal-black p-6 shadow-brutal">
                    <h3 className="text-xl font-bold font-heading mb-2 text-black">Join the Waitlist</h3>
                    <p className="text-gray-800 mb-4">
                        Paid plans are coming soon! Enter your email to be notified when upgrades are available.
                    </p>

                    {waitlistSubmitted ? (
                        <div className="bg-green-100 border-2 border-green-500 p-3 text-green-700 font-medium">
                            ✓ You&apos;re on the list! We&apos;ll notify you when paid plans launch.
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <input
                                type="email"
                                value={waitlistEmail}
                                onChange={(e) => setWaitlistEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="flex-1 px-4 py-3 border-3 border-brutal-black bg-white text-black placeholder-gray-500"
                            />
                            <button
                                onClick={handleWaitlist}
                                className="px-6 py-3 bg-brutal-yellow border-3 border-brutal-black font-bold text-black shadow-brutal hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-brutal-hover transition-all"
                            >
                                Notify Me
                            </button>
                        </div>
                    )}
                </div>

                <p className="text-center mt-8 text-gray-600 text-sm">
                    Need more? Contact us at support@leadmapr.com for custom plans.
                </p>
            </main>
        </div>
    );
}
