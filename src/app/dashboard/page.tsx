'use client';

import { useState, useEffect } from 'react';
import { Lead, FilterOptions, ExportFormat, SubscriptionTier } from '@/types/lead';
import { filterLeads, excludeChains } from '@/lib/filters';

interface UsageInfo {
    tier: SubscriptionTier;
    used: number;
    limit: number;
    remaining: number;
}

export default function DashboardPage() {
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');
    const [leads, setLeads] = useState<Lead[]>([]);
    const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isExporting, setIsExporting] = useState(false);

    // Usage state - fetched from DB
    const [usage, setUsage] = useState<UsageInfo>({
        tier: 'free',
        used: 0,
        limit: 50,
        remaining: 50,
    });
    const [usageLoading, setUsageLoading] = useState(true);

    // Filter state
    const [filters, setFilters] = useState<FilterOptions>({
        hasWebsite: false,
        hasPhone: false,
        minRating: undefined,
        minReviews: undefined,
        excludeClosed: false,
        excludeChains: false,
    });

    // Fetch usage on mount
    useEffect(() => {
        fetchUsage();
    }, []);

    const fetchUsage = async () => {
        try {
            const res = await fetch('/api/user/usage');
            if (res.ok) {
                const data = await res.json();
                setUsage(data);
            }
        } catch (err) {
            console.error('Failed to fetch usage:', err);
        } finally {
            setUsageLoading(false);
        }
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await fetch('/api/leads/search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ keyword, location }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Search failed');
            }

            setLeads(data.leads);
            applyFilters(data.leads, filters);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Search failed');
        } finally {
            setIsLoading(false);
        }
    };

    const applyFilters = (leadsToFilter: Lead[], filterOptions: FilterOptions) => {
        let filtered = filterLeads(leadsToFilter, filterOptions);
        if (filterOptions.excludeChains) {
            filtered = excludeChains(filtered);
        }
        setFilteredLeads(filtered);
    };

    const handleFilterChange = (key: keyof FilterOptions, value: boolean | number | undefined) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        applyFilters(leads, newFilters);
    };

    // Check if export is allowed
    const canExport = usage.remaining >= filteredLeads.length && filteredLeads.length > 0;
    const exportDisabledReason = filteredLeads.length === 0
        ? 'No leads to export'
        : usage.remaining < filteredLeads.length
            ? `Only ${usage.remaining} exports remaining (need ${filteredLeads.length})`
            : '';

    const handleExport = async (format: ExportFormat) => {
        if (!canExport) {
            setError(exportDisabledReason);
            return;
        }

        setIsExporting(true);
        setError('');

        try {
            const res = await fetch('/api/leads/export', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ leads: filteredLeads, format }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Export failed');
            }

            // Download file
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `leads.${format === 'xlsx' ? 'xlsx' : format === 'whatsapp' ? 'tsv' : 'csv'}`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            // Refresh usage after export
            await fetchUsage();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Export failed');
        } finally {
            setIsExporting(false);
        }
    };


    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-brutal-black text-white py-4 px-6">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold font-heading text-brutal-yellow">LeadMapr</h1>
                    <div className="flex items-center gap-6">
                        <div className="text-sm">
                            <span className="text-white/60">Plan: </span>
                            <span className="font-bold text-brutal-yellow uppercase">{usage.tier}</span>
                        </div>
                        <div className="text-sm">
                            <span className="text-white/60">Exports: </span>
                            <span className="font-bold text-white">
                                {usageLoading ? '...' : `${usage.used}/${usage.limit}`}
                            </span>
                            <span className="text-white/40 text-xs ml-1">(monthly)</span>
                        </div>
                        <a href="/dashboard/billing" className="px-4 py-2 bg-brutal-yellow text-brutal-black font-bold text-sm hover:bg-yellow-400 transition-colors">
                            Manage Plan
                        </a>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-8">
                {/* Search Form */}
                <div className="bg-white border-4 border-brutal-black p-6 shadow-brutal mb-8">
                    <h2 className="text-xl font-bold font-heading mb-4 text-black">Search Leads</h2>
                    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="block font-bold mb-2 text-black">Keyword</label>
                            <input
                                type="text"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                placeholder="e.g. cafes, dentists, gyms"
                                className="input-brutal w-full text-black"
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block font-bold mb-2 text-black">Location</label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="e.g. New York, Los Angeles"
                                className="input-brutal w-full text-black"
                                required
                            />
                        </div>
                        <div className="flex items-end">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="btn-brutal disabled:opacity-50"
                            >
                                {isLoading ? 'Searching...' : 'Search →'}
                            </button>
                        </div>
                    </form>
                </div>

                {error && (
                    <div className="bg-red-100 border-3 border-red-500 p-4 mb-6 text-red-700 font-medium">
                        {error}
                    </div>
                )}

                {leads.length > 0 && (
                    <>
                        {/* Filters */}
                        <div className="bg-white border-4 border-brutal-black p-6 shadow-brutal mb-8">
                            <h3 className="font-bold mb-4 text-black">Filters</h3>
                            <div className="flex flex-wrap gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={filters.hasWebsite}
                                        onChange={(e) => handleFilterChange('hasWebsite', e.target.checked)}
                                        className="w-5 h-5"
                                    />
                                    <span className="text-black">Has website</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={filters.hasPhone}
                                        onChange={(e) => handleFilterChange('hasPhone', e.target.checked)}
                                        className="w-5 h-5"
                                    />
                                    <span className="text-black">Has phone</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={filters.excludeClosed}
                                        onChange={(e) => handleFilterChange('excludeClosed', e.target.checked)}
                                        className="w-5 h-5"
                                    />
                                    <span className="text-black">Exclude closed</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={filters.excludeChains}
                                        onChange={(e) => handleFilterChange('excludeChains', e.target.checked)}
                                        className="w-5 h-5"
                                    />
                                    <span className="text-black">Exclude chains</span>
                                </label>
                                <div className="flex items-center gap-2">
                                    <span className="text-black">Min rating:</span>
                                    <select
                                        value={filters.minRating || ''}
                                        onChange={(e) => handleFilterChange('minRating', e.target.value ? Number(e.target.value) : undefined)}
                                        className="border-2 border-brutal-black px-2 py-1 bg-white text-black"
                                    >
                                        <option value="">Any</option>
                                        <option value="3">3+</option>
                                        <option value="3.5">3.5+</option>
                                        <option value="4">4+</option>
                                        <option value="4.5">4.5+</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-black">Min reviews:</span>
                                    <select
                                        value={filters.minReviews || ''}
                                        onChange={(e) => handleFilterChange('minReviews', e.target.value ? Number(e.target.value) : undefined)}
                                        className="border-2 border-brutal-black px-2 py-1 bg-white text-black"
                                    >
                                        <option value="">Any</option>
                                        <option value="10">10+</option>
                                        <option value="50">50+</option>
                                        <option value="100">100+</option>
                                        <option value="500">500+</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Quota Warning */}
                        {!canExport && filteredLeads.length > 0 && (
                            <div className="bg-orange-100 border-3 border-orange-500 p-4 mb-6 text-orange-800 font-medium">
                                ⚠️ {exportDisabledReason}. <a href="/dashboard/billing" className="underline font-bold">Upgrade your plan</a> to export more leads.
                            </div>
                        )}

                        {/* Results */}
                        <div className="bg-white border-4 border-brutal-black shadow-brutal">
                            <div className="flex justify-between items-center p-4 border-b-4 border-brutal-black bg-brutal-yellow">
                                <h3 className="font-bold text-lg text-black">
                                    {filteredLeads.length} leads found
                                    {filteredLeads.length !== leads.length && ` (${leads.length} total)`}
                                </h3>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleExport('csv')}
                                        disabled={!canExport || isExporting}
                                        className={`px-4 py-2 border-3 border-brutal-black font-bold text-sm shadow-brutal transition-all ${canExport && !isExporting
                                            ? 'bg-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-brutal-hover'
                                            : 'bg-gray-300 cursor-not-allowed opacity-50'
                                            }`}
                                    >
                                        {isExporting ? '...' : '📊 CSV'}
                                    </button>
                                    <button
                                        onClick={() => handleExport('xlsx')}
                                        disabled={!canExport || isExporting}
                                        className={`px-4 py-2 border-3 border-brutal-black font-bold text-sm shadow-brutal transition-all ${canExport && !isExporting
                                            ? 'bg-brutal-green hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-brutal-hover'
                                            : 'bg-gray-300 cursor-not-allowed opacity-50'
                                            }`}
                                    >
                                        {isExporting ? '...' : '📗 Excel'}
                                    </button>
                                    <button
                                        onClick={() => handleExport('whatsapp')}
                                        disabled={!canExport || isExporting}
                                        className={`px-4 py-2 border-3 border-brutal-black font-bold text-sm shadow-brutal transition-all ${canExport && !isExporting
                                            ? 'bg-brutal-green hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-brutal-hover'
                                            : 'bg-gray-300 cursor-not-allowed opacity-50'
                                            }`}
                                    >
                                        {isExporting ? '...' : '💬 WhatsApp'}
                                    </button>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[800px]">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-bold border-b-3 border-brutal-black text-black">Business</th>
                                            <th className="px-4 py-3 text-left font-bold border-b-3 border-brutal-black text-black">Phone</th>
                                            <th className="px-4 py-3 text-left font-bold border-b-3 border-brutal-black text-black">Website</th>
                                            <th className="px-4 py-3 text-left font-bold border-b-3 border-brutal-black text-black">Rating</th>
                                            <th className="px-4 py-3 text-left font-bold border-b-3 border-brutal-black text-black">Maps</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredLeads.map((lead, index) => (
                                            <tr key={lead.placeId} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="px-4 py-3 border-b border-gray-200">
                                                    <div className="font-bold text-black">{lead.name}</div>
                                                    <div className="text-sm text-gray-600">{lead.address}</div>
                                                </td>
                                                <td className="px-4 py-3 border-b border-gray-200 font-mono text-sm text-black">
                                                    {lead.phone || <span className="text-gray-400">—</span>}
                                                </td>
                                                <td className="px-4 py-3 border-b border-gray-200">
                                                    {lead.website ? (
                                                        <a
                                                            href={lead.website}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-600 hover:underline text-sm"
                                                        >
                                                            {new URL(lead.website).hostname}
                                                        </a>
                                                    ) : (
                                                        <span className="text-gray-400">—</span>
                                                    )}
                                                </td>
                                                <td className="px-4 py-3 border-b border-gray-200 text-black">
                                                    {lead.rating ? (
                                                        <span>
                                                            <span className="text-yellow-500">★</span> {lead.rating}
                                                            <span className="text-gray-500 text-sm"> ({lead.reviewCount})</span>
                                                        </span>
                                                    ) : (
                                                        <span className="text-gray-400">—</span>
                                                    )}
                                                </td>
                                                <td className="px-4 py-3 border-b border-gray-200">
                                                    <a
                                                        href={lead.mapsUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:underline text-sm"
                                                    >
                                                        View →
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}

                {leads.length === 0 && !isLoading && (
                    <div className="text-center py-16 text-gray-500">
                        <div className="text-5xl mb-4">🔍</div>
                        <p className="text-xl">Enter a keyword and location to find leads</p>
                    </div>
                )}
            </main>
        </div>
    );
}
