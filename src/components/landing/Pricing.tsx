import Link from 'next/link';

export default function Pricing() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "forever",
            leads: "50",
            color: "bg-white",
            features: [
                "50 leads/month",
                "CSV export",
                "Basic filters",
                "Google Maps data"
            ],
            cta: "Start Free",
            popular: false
        },
        {
            name: "Starter",
            price: "$5",
            period: "/month",
            leads: "1,000",
            color: "bg-brutal-blue",
            features: [
                "1,000 leads/month",
                "CSV + Excel export",
                "All filters",
                "WhatsApp format",
                "AI summaries"
            ],
            cta: "Get Starter",
            popular: false
        },
        {
            name: "Pro",
            price: "$15",
            period: "/month",
            leads: "10,000",
            color: "bg-brutal-yellow",
            features: [
                "10,000 leads/month",
                "Everything in Starter",
                "Priority support",
                "Bulk search",
                "API access (soon)"
            ],
            cta: "Get Pro",
            popular: true
        },
        {
            name: "Agency",
            price: "$39",
            period: "/month",
            leads: "50,000",
            color: "bg-brutal-pink",
            features: [
                "50,000 leads/month",
                "Everything in Pro",
                "White-label exports",
                "Team seats (soon)",
                "Dedicated support"
            ],
            cta: "Get Agency",
            popular: false
        }
    ];

    return (
        <section className="bg-gray-100 py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-brutal-purple text-white font-bold mb-4 text-sm uppercase tracking-wider">
                        Simple Pricing
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-brutal-black mb-4">
                        Pay Per Lead, Not Per Feature
                    </h2>
                    <p className="text-xl text-brutal-black/70 max-w-2xl mx-auto">
                        No hidden fees. Cancel anytime. Start free, upgrade when you need more.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`${plan.color} border-4 border-brutal-black p-6 relative ${plan.popular ? 'transform -translate-y-4 shadow-brutal-xl' : 'shadow-brutal'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brutal-black text-brutal-yellow font-bold text-sm">
                                    MOST POPULAR
                                </div>
                            )}

                            <h3 className="text-2xl font-bold font-heading text-brutal-black mb-2">
                                {plan.name}
                            </h3>

                            <div className="mb-4">
                                <span className="text-4xl font-bold text-brutal-black">{plan.price}</span>
                                <span className="text-brutal-black/70">{plan.period}</span>
                            </div>

                            <div className="mb-6 pb-4 border-b-3 border-brutal-black">
                                <span className="text-lg font-bold">{plan.leads}</span>
                                <span className="text-brutal-black/70"> leads/month</span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-brutal-green font-bold">✓</span>
                                        <span className="text-brutal-black/80">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/signup"
                                className={`block w-full text-center py-3 font-bold border-3 border-brutal-black ${plan.popular
                                        ? 'bg-brutal-black text-brutal-yellow'
                                        : 'bg-white text-brutal-black'
                                    } shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-12 text-brutal-black/60">
                    All plans include access to Google Places verified data. No credit card required for free tier.
                </p>
            </div>
        </section>
    );
}
