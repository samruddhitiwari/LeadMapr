import { Lead, FilterOptions } from '@/types/lead';

export function filterLeads(leads: Lead[], options: FilterOptions): Lead[] {
    return leads.filter((lead) => {
        // Filter: has website
        if (options.hasWebsite && !lead.website) {
            return false;
        }

        // Filter: has phone
        if (options.hasPhone && !lead.phone) {
            return false;
        }

        // Filter: minimum rating
        if (options.minRating && (!lead.rating || lead.rating < options.minRating)) {
            return false;
        }

        // Filter: minimum reviews
        if (options.minReviews && (!lead.reviewCount || lead.reviewCount < options.minReviews)) {
            return false;
        }

        // Filter: exclude closed
        if (options.excludeClosed && lead.isOpen === false) {
            return false;
        }

        return true;
    });
}

// Identify potential chains by counting duplicate names
export function excludeChains(leads: Lead[]): Lead[] {
    const nameCounts: Record<string, number> = {};

    // Count occurrences of each name
    leads.forEach((lead) => {
        const normalizedName = lead.name.toLowerCase().trim();
        nameCounts[normalizedName] = (nameCounts[normalizedName] || 0) + 1;
    });

    // Filter out leads with names that appear more than once (likely chains)
    return leads.filter((lead) => {
        const normalizedName = lead.name.toLowerCase().trim();
        return nameCounts[normalizedName] <= 1;
    });
}
