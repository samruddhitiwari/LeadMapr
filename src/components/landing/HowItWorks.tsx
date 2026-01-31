export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Search",
            description: "Enter a keyword like 'cafes' or 'dentists' and pick your target city.",
            color: "bg-brutal-pink",
            icon: "🔍"
        },
        {
            number: "02",
            title: "Filter",
            description: "Only businesses with phone numbers? Rating above 4.0? You decide.",
            color: "bg-brutal-blue",
            icon: "⚡"
        },
        {
            number: "03",
            title: "Export",
            description: "Download as CSV, Excel, or WhatsApp-ready format with pre-filled messages.",
            color: "bg-brutal-green",
            icon: "📥"
        }
    ];

    return (
        <section id="how-it-works" className="bg-brutal-black py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-brutal-yellow text-brutal-black font-bold mb-4 text-sm uppercase tracking-wider">
                        Simple Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                        How It Works
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`${step.color} border-4 border-brutal-black p-8 relative transform hover:-translate-y-2 transition-transform shadow-brutal-xl`}
                        >
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-brutal-black text-white font-bold flex items-center justify-center text-lg">
                                {step.number}
                            </div>

                            <div className="text-5xl mb-4">{step.icon}</div>

                            <h3 className="text-2xl font-bold font-heading text-brutal-black mb-3">
                                {step.title}
                            </h3>

                            <p className="text-brutal-black/80 text-lg">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Connection lines */}
                <div className="hidden md:flex justify-center mt-8">
                    <div className="flex items-center gap-2 text-white text-2xl">
                        <span>→</span>
                        <span>→</span>
                        <span>→</span>
                        <span className="ml-4 font-bold">Done in 30 seconds</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
