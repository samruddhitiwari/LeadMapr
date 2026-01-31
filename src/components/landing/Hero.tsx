import Link from 'next/link';

export default function Hero() {
    return (
        <section className="min-h-screen bg-brutal-yellow relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-brutal-pink border-4 border-brutal-black rotate-12 hidden md:block" />
            <div className="absolute bottom-40 left-10 w-24 h-24 bg-brutal-blue border-4 border-brutal-black -rotate-6 hidden md:block" />
            <div className="absolute top-1/2 right-10 w-16 h-16 bg-brutal-green border-4 border-brutal-black rotate-45 hidden lg:block" />

            <div className="container mx-auto px-6 py-20 relative z-10">
                <nav className="flex justify-between items-center mb-20">
                    <div className="text-3xl font-bold font-heading text-brutal-black">
                        LeadMapr
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/login"
                            className="px-6 py-2 font-bold border-3 border-brutal-black bg-white text-brutal-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="btn-brutal"
                        >
                            Start Free →
                        </Link>
                    </div>
                </nav>

                <div className="max-w-4xl">
                    <div className="inline-block px-4 py-2 bg-brutal-black text-brutal-yellow font-bold mb-6 text-sm uppercase tracking-wider">
                        No Scraping. 100% Google API.
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading text-brutal-black leading-tight mb-6">
                        Turn Google Maps Into{' '}
                        <span className="bg-brutal-pink px-2 inline-block -rotate-1">
                            Outreach-Ready
                        </span>{' '}
                        Leads
                    </h1>

                    <p className="text-xl md:text-2xl text-brutal-black/80 mb-10 max-w-2xl">
                        Search any keyword + city. Get verified business names, phone numbers,
                        and websites. Export to CSV, Excel, or WhatsApp-ready format.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <Link
                            href="/signup"
                            className="btn-brutal text-center text-lg"
                        >
                            Get 50 Free Leads →
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="px-6 py-3 font-bold border-3 border-brutal-black bg-white text-brutal-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all text-center text-lg"
                        >
                            See How It Works
                        </Link>
                    </div>

                    {/* Social proof */}
                    <div className="flex items-center gap-6 flex-wrap">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="w-10 h-10 rounded-full border-3 border-brutal-black bg-brutal-blue flex items-center justify-center text-sm font-bold"
                                >
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <div className="text-brutal-black">
                            <span className="font-bold">2,000+</span> marketers already using LeadMapr
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-brutal-black transform -skew-y-2" />
        </section>
    );
}
