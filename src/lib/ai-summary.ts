import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function fetchWebsiteContent(url: string): Promise<string | null> {
    try {
        // Basic fetch with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(url, {
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; LeadMapr/1.0)',
            },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            return null;
        }

        const html = await response.text();

        // Basic HTML to text conversion (strip tags)
        const text = html
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
            .replace(/<[^>]+>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .slice(0, 3000); // Limit content

        return text;
    } catch (error) {
        console.error('Error fetching website:', error);
        return null;
    }
}

export async function generateAISummary(websiteContent: string, businessName: string): Promise<string | null> {
    if (!process.env.OPENAI_API_KEY) {
        console.warn('OpenAI API key not configured');
        return null;
    }

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'You are a business analyst. Generate a 1-2 sentence summary of what this business does based on their website content. Focus on their main services/products and target customers. Be concise and factual.'
                },
                {
                    role: 'user',
                    content: `Business name: ${businessName}\n\nWebsite content:\n${websiteContent}`
                }
            ],
            max_tokens: 100,
            temperature: 0.3,
        });

        return response.choices[0]?.message?.content?.trim() || null;
    } catch (error) {
        console.error('Error generating AI summary:', error);
        return null;
    }
}

export async function enrichLeadWithAI(lead: { name: string; website?: string }): Promise<string | null> {
    if (!lead.website) {
        return null;
    }

    const content = await fetchWebsiteContent(lead.website);
    if (!content) {
        return null;
    }

    return generateAISummary(content, lead.name);
}
