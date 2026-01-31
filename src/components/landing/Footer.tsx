import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-brutal-black text-white py-16">
            <div className="container mx-auto px-6">
                {/* CTA Section */}
                <div className="text-center mb-16 pb-16 border-b-4 border-white/20">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                        Ready to Find Your Next{' '}
                        <span className="text-brutal-yellow">1,000 Leads</span>?
                    </h2>
                    <p className="text-xl text-white/70 mb-8 max-w-xl mx-auto">
                        Start with 50 free leads. No credit card required.
                    </p>
                    <Link
                        href="/signup"
                        className="inline-block px-8 py-4 bg-brutal-yellow text-brutal-black font-bold border-4 border-white text-lg shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all"
                    >
                        Start Free Now →
                    </Link>
                </div>

                {/* Footer Links */}
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold font-heading text-brutal-yellow mb-4">
                            LeadMapr
                        </h3>
                        <p className="text-white/70">
                            Verified Google Maps business leads, ready for outreach.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-lg">Product</h4>
                        <ul className="space-y-2 text-white/70">
                            <li><Link href="#how-it-works" className="hover:text-brutal-yellow transition-colors">How It Works</Link></li>
                            <li><Link href="#pricing" className="hover:text-brutal-yellow transition-colors">Pricing</Link></li>
                            <li><Link href="/dashboard" className="hover:text-brutal-yellow transition-colors">Dashboard</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-lg">Legal</h4>
                        <ul className="space-y-2 text-white/70">
                            <li><Link href="/privacy" className="hover:text-brutal-yellow transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-brutal-yellow transition-colors">Terms of Service</Link></li>
                            <li><Link href="/refund" className="hover:text-brutal-yellow transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-lg">Support</h4>
                        <ul className="space-y-2 text-white/70">
                            <li><a href="mailto:support@leadmapr.com" className="hover:text-brutal-yellow transition-colors">support@leadmapr.com</a></li>
                            <li><Link href="/faq" className="hover:text-brutal-yellow transition-colors">FAQ</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
                    <p className="text-white/50 text-sm">
                        © 2024 LeadMapr. All rights reserved.
                    </p>
                    <p className="text-white/50 text-sm mt-4 md:mt-0">
                        Built with Google Places API. 100% compliant.
                    </p>
                </div>
            </div>
        </footer>
    );
}
