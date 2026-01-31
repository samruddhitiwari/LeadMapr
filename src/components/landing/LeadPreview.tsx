export default function LeadPreview() {
    const sampleLeads = [
        {
            name: "Sunrise Cafe",
            address: "123 Main St, Brooklyn, NY",
            phone: "+1 (555) 123-4567",
            website: "sunrisecafe.com",
            rating: 4.7,
            reviews: 342,
            aiSummary: "Brunch-focused cafe with outdoor seating and weekend specials."
        },
        {
            name: "Brooklyn Dental Studio",
            address: "456 Oak Ave, Brooklyn, NY",
            phone: "+1 (555) 234-5678",
            website: "brooklyndental.com",
            rating: 4.9,
            reviews: 128,
            aiSummary: "Modern dental practice emphasizing cosmetic and family dentistry."
        },
        {
            name: "Urban Fitness Co",
            address: "789 Park Blvd, Brooklyn, NY",
            phone: "+1 (555) 345-6789",
            website: "urbanfitnessco.com",
            rating: 4.5,
            reviews: 567,
            aiSummary: "Boutique gym offering HIIT classes and personal training."
        },
        {
            name: "Green Leaf Landscaping",
            address: "321 Elm St, Brooklyn, NY",
            phone: "+1 (555) 456-7890",
            website: null,
            rating: 4.3,
            reviews: 89,
            aiSummary: null
        }
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-brutal-black text-brutal-yellow font-bold mb-4 text-sm uppercase tracking-wider">
                        Real Output
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-brutal-black mb-4">
                        What You&apos;ll Get
                    </h2>
                    <p className="text-xl text-brutal-black/70 max-w-2xl mx-auto">
                        Clean, verified data from Google Places API. No scraped garbage.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-[900px]">
                        <table className="w-full border-4 border-brutal-black">
                            <thead className="bg-brutal-yellow">
                                <tr>
                                    <th className="px-4 py-4 text-left font-bold border-b-4 border-r-4 border-brutal-black">Business</th>
                                    <th className="px-4 py-4 text-left font-bold border-b-4 border-r-4 border-brutal-black">Phone</th>
                                    <th className="px-4 py-4 text-left font-bold border-b-4 border-r-4 border-brutal-black">Website</th>
                                    <th className="px-4 py-4 text-left font-bold border-b-4 border-r-4 border-brutal-black">Rating</th>
                                    <th className="px-4 py-4 text-left font-bold border-b-4 border-brutal-black">AI Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sampleLeads.map((lead, index) => (
                                    <tr
                                        key={index}
                                        className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                    >
                                        <td className="px-4 py-4 border-b-3 border-r-3 border-brutal-black">
                                            <div className="font-bold">{lead.name}</div>
                                            <div className="text-sm text-gray-600">{lead.address}</div>
                                        </td>
                                        <td className="px-4 py-4 border-b-3 border-r-3 border-brutal-black font-mono text-sm">
                                            {lead.phone}
                                        </td>
                                        <td className="px-4 py-4 border-b-3 border-r-3 border-brutal-black">
                                            {lead.website ? (
                                                <span className="text-brutal-blue font-medium">{lead.website}</span>
                                            ) : (
                                                <span className="text-gray-400">—</span>
                                            )}
                                        </td>
                                        <td className="px-4 py-4 border-b-3 border-r-3 border-brutal-black">
                                            <div className="flex items-center gap-1">
                                                <span className="text-brutal-yellow">★</span>
                                                <span className="font-bold">{lead.rating}</span>
                                                <span className="text-gray-500 text-sm">({lead.reviews})</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 border-b-3 border-brutal-black text-sm text-gray-700 max-w-xs">
                                            {lead.aiSummary || <span className="text-gray-400 italic">No website</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex justify-center mt-8 gap-4">
                    <button className="px-4 py-2 bg-brutal-green border-3 border-brutal-black font-bold shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all">
                        📊 Export CSV
                    </button>
                    <button className="px-4 py-2 bg-brutal-blue border-3 border-brutal-black font-bold shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all">
                        📗 Export Excel
                    </button>
                    <button className="px-4 py-2 bg-brutal-green border-3 border-brutal-black font-bold shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover transition-all">
                        💬 WhatsApp Ready
                    </button>
                </div>
            </div>
        </section>
    );
}
