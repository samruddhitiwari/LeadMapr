// Dodo Payments REST API integration
// Documentation: https://docs.dodopayments.com/api-reference

const DODO_API_KEY = process.env.DODO_API_KEY || '';
const BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://live.dodopayments.com'
    : 'https://test.dodopayments.com';

// Product IDs from Dodo dashboard
export const DODO_PRODUCTS = {
    starter: process.env.DODO_PRODUCT_STARTER || '',
    pro: process.env.DODO_PRODUCT_PRO || '',
    agency: process.env.DODO_PRODUCT_AGENCY || '',
};

async function dodoFetch(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Authorization': `Bearer ${DODO_API_KEY}`,
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    if (!response.ok) {
        const error = await response.text();
        console.error('Dodo API error:', error);
        throw new Error(`Dodo API error: ${response.status}`);
    }

    return response.json();
}

export async function createCheckoutSession(
    productId: string,
    customerEmail: string,
    successUrl: string,
    _cancelUrl: string
) {
    try {
        const session = await dodoFetch('/v1/checkout_sessions', {
            method: 'POST',
            body: JSON.stringify({
                product_cart: [{ product_id: productId, quantity: 1 }],
                customer: { email: customerEmail },
                payment_link: true,
                return_url: successUrl,
            }),
        });

        return session;
    } catch (error) {
        console.error('Dodo checkout error:', error);
        throw error;
    }
}

export async function getSubscription(subscriptionId: string) {
    try {
        const subscription = await dodoFetch(`/v1/subscriptions/${subscriptionId}`);
        return subscription;
    } catch (error) {
        console.error('Dodo subscription retrieval error:', error);
        throw error;
    }
}

export async function cancelSubscription(subscriptionId: string) {
    try {
        await dodoFetch(`/v1/subscriptions/${subscriptionId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                cancel_at_period_end: true,
            }),
        });
    } catch (error) {
        console.error('Dodo cancel subscription error:', error);
        throw error;
    }
}

export async function changePlan(
    subscriptionId: string,
    newProductId: string
) {
    try {
        await dodoFetch(`/v1/subscriptions/${subscriptionId}/change_plan`, {
            method: 'POST',
            body: JSON.stringify({
                product_id: newProductId,
                quantity: 1,
                proration_billing_mode: 'difference_immediately',
            }),
        });
    } catch (error) {
        console.error('Dodo plan change error:', error);
        throw error;
    }
}
