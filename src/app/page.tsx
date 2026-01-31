import Hero from '@/components/landing/Hero';
import HowItWorks from '@/components/landing/HowItWorks';
import LeadPreview from '@/components/landing/LeadPreview';
import Pricing from '@/components/landing/Pricing';
import Footer from '@/components/landing/Footer';

export default function Home() {
    return (
        <main>
            <Hero />
            <HowItWorks />
            <LeadPreview />
            <Pricing />
            <Footer />
        </main>
    );
}
