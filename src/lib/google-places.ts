import { Lead } from '@/types/lead';

const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const BASE_URL = 'https://places.googleapis.com/v1';

interface PlaceSearchResult {
    places?: Array<{
        id: string;
        displayName?: { text: string };
        formattedAddress?: string;
        nationalPhoneNumber?: string;
        websiteUri?: string;
        rating?: number;
        userRatingCount?: number;
    }>;
}

export async function searchPlaces(keyword: string, location: string): Promise<Lead[]> {
    if (!GOOGLE_API_KEY) {
        console.error('GOOGLE_PLACES_API_KEY is not set in environment variables');
        throw new Error('Google Places API key not configured');
    }

    const query = `${keyword} in ${location}`;

    // Build the request
    const url = 'https://places.googleapis.com/v1/places:searchText';
    const fieldMask = [
        'places.displayName',
        'places.formattedAddress',
        'places.id',
        'places.rating',
        'places.userRatingCount',
        'places.websiteUri',
        'places.nationalPhoneNumber'
    ].join(',');

    const requestBody = {
        textQuery: query,
        pageSize: 20
    };

    console.log('Google Places API Request:', {
        url,
        method: 'POST',
        fieldMask,
        body: requestBody,
        apiKeySet: !!GOOGLE_API_KEY,
        apiKeyLength: GOOGLE_API_KEY?.length
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': GOOGLE_API_KEY,
                'X-Goog-FieldMask': fieldMask
            },
            body: JSON.stringify(requestBody)
        });

        console.log('Google Places API Response Status:', response.status, response.statusText);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Google Places API Error Response:', {
                status: response.status,
                statusText: response.statusText,
                body: errorText
            });
            throw new Error(`Google Places API error: ${response.status} - ${errorText}`);
        }

        const data: PlaceSearchResult = await response.json();
        console.log('Google Places API Success - Places found:', data.places?.length || 0);

        if (!data.places || data.places.length === 0) {
            return [];
        }

        // Map to Lead format
        const leads: Lead[] = data.places.map((place) => ({
            placeId: place.id,
            name: place.displayName?.text || 'Unknown',
            address: place.formattedAddress || '',
            phone: place.nationalPhoneNumber || undefined,
            website: place.websiteUri || undefined,
            rating: place.rating || undefined,
            reviewCount: place.userRatingCount || undefined,
            mapsUrl: `https://www.google.com/maps/place/?q=place_id:${place.id}`,
            isOpen: true,
        }));

        return leads;
    } catch (error) {
        console.error('Error searching places:', error);
        throw error;
    }
}

// Get more details for a specific place (if needed for AI summary)
export async function getPlaceDetails(placeId: string): Promise<{
    website?: string;
    description?: string;
}> {
    if (!GOOGLE_API_KEY) {
        throw new Error('Google Places API key not configured');
    }

    try {
        const response = await fetch(`${BASE_URL}/${placeId}`, {
            method: 'GET',
            headers: {
                'X-Goog-Api-Key': GOOGLE_API_KEY,
                'X-Goog-FieldMask': 'websiteUri,editorialSummary'
            }
        });

        if (!response.ok) {
            return {};
        }

        const data = await response.json();

        return {
            website: data.websiteUri,
            description: data.editorialSummary?.text,
        };
    } catch (error) {
        console.error('Error getting place details:', error);
        return {};
    }
}
