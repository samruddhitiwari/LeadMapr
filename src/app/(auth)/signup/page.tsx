'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || 'Failed to create account');
                return;
            }

            // Redirect to login
            router.push('/login?registered=true');
        } catch {
            setError('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-brutal-pink flex items-center justify-center p-6">
            <div className="absolute top-10 left-10">
                <Link href="/" className="text-2xl font-bold font-heading text-brutal-black">
                    LeadMapr
                </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-24 h-24 bg-brutal-yellow border-4 border-brutal-black rotate-12 hidden md:block" />
            <div className="absolute bottom-20 left-20 w-20 h-20 bg-brutal-green border-4 border-brutal-black -rotate-6 hidden md:block" />

            <div className="w-full max-w-md">
                <div className="bg-white border-4 border-brutal-black p-8 shadow-brutal-xl">
                    <div className="inline-block px-3 py-1 bg-brutal-green border-2 border-brutal-black font-bold text-sm mb-4">
                        50 FREE LEADS
                    </div>

                    <h1 className="text-3xl font-bold font-heading text-brutal-black mb-2">
                        Create Your Account
                    </h1>
                    <p className="text-brutal-black/70 mb-8">
                        Start generating leads in 30 seconds
                    </p>

                    {error && (
                        <div className="mb-6 p-4 bg-red-100 border-3 border-red-500 text-red-700 font-medium">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block font-bold text-brutal-black mb-2">
                                Name (optional)
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input-brutal w-full text-black"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-bold text-brutal-black mb-2">
                                Email *
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input-brutal w-full text-black"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block font-bold text-brutal-black mb-2">
                                Password *
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-brutal w-full text-black"
                                placeholder="••••••••"
                                minLength={8}
                                required
                            />
                            <p className="text-sm text-brutal-black/60 mt-1">Minimum 8 characters</p>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn-brutal w-full disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Creating account...' : 'Start Free →'}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-brutal-black/70">
                        Already have an account?{' '}
                        <Link href="/login" className="font-bold text-brutal-black hover:text-brutal-pink transition-colors">
                            Log in
                        </Link>
                    </p>

                    <p className="mt-6 text-xs text-center text-brutal-black/50">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    );
}
