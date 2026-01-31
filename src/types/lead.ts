export interface Lead {
    placeId: string;
    name: string;
    address: string;
    phone?: string;
    website?: string;
    rating?: number;
    reviewCount?: number;
    mapsUrl: string;
    aiSummary?: string;
    isOpen?: boolean;
}

export interface FilterOptions {
    hasWebsite?: boolean;
    hasPhone?: boolean;
    minRating?: number;
    minReviews?: number;
    excludeClosed?: boolean;
    excludeChains?: boolean;
}

export type ExportFormat = 'csv' | 'xlsx' | 'whatsapp';

export type SubscriptionTier = 'free' | 'starter' | 'pro' | 'agency';

export const PLAN_LIMITS: Record<SubscriptionTier, number> = {
    free: 50,
    starter: 1000,
    pro: 10000,
    agency: 50000,
};

export const PLAN_PRICES: Record<Exclude<SubscriptionTier, 'free'>, number> = {
    starter: 5,
    pro: 15,
    agency: 39,
};
