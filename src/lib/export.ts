import { Lead } from '@/types/lead';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';

export function generateCSV(leads: Lead[]): string {
    const data = leads.map((lead) => ({
        'Business Name': lead.name,
        'Address': lead.address,
        'Phone': lead.phone || '',
        'Website': lead.website || '',
        'Rating': lead.rating || '',
        'Reviews': lead.reviewCount || '',
        'Google Maps': lead.mapsUrl,
        'AI Summary': lead.aiSummary || '',
    }));

    return Papa.unparse(data);
}

export function generateExcel(leads: Lead[]): Buffer {
    const data = leads.map((lead) => ({
        'Business Name': lead.name,
        'Address': lead.address,
        'Phone': lead.phone || '',
        'Website': lead.website || '',
        'Rating': lead.rating || '',
        'Reviews': lead.reviewCount || '',
        'Google Maps': lead.mapsUrl,
        'AI Summary': lead.aiSummary || '',
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Leads');

    // Set column widths
    worksheet['!cols'] = [
        { wch: 30 }, // Business Name
        { wch: 40 }, // Address
        { wch: 20 }, // Phone
        { wch: 30 }, // Website
        { wch: 8 },  // Rating
        { wch: 10 }, // Reviews
        { wch: 50 }, // Google Maps
        { wch: 50 }, // AI Summary
    ];

    return Buffer.from(XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' }));
}

export function generateWhatsApp(leads: Lead[], messageTemplate?: string): string {
    const defaultTemplate = "Hi {{business_name}}, I help local businesses get more customers through Google visibility. Would you like to explore this?";
    const template = messageTemplate || defaultTemplate;

    const rows = leads
        .filter((lead) => lead.phone) // Only include leads with phone numbers
        .map((lead) => {
            const message = template.replace('{{business_name}}', lead.name);
            const whatsappLink = `https://wa.me/${lead.phone?.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
            return `${lead.name}\t${lead.phone}\t${whatsappLink}`;
        });

    const header = 'Business Name\tPhone\tWhatsApp Link';
    return [header, ...rows].join('\n');
}
