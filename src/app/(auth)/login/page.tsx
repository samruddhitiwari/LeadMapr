'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError(result.error);
            } else {
                router.push('/dashboard');
            }
        } catch {
            setError('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-brutal-yellow flex items-center justify-center p-6">
            <div className="absolute top-10 left-10">
                <Link href="/" className="text-2xl font-bold font-heading text-brutal-black">
                    LeadMapr
                </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-24 h-24 bg-brutal-pink border-4 border-brutal-black rotate-12 hidden md:block" />
            <div className="absolute bottom-20 left-20 w-20 h-20 bg-brutal-blue border-4 border-brutal-black -rotate-6 hidden md:block" />

            <div className="w-full max-w-md">
                <div className="bg-white border-4 border-brutal-black p-8 shadow-brutal-xl">
                    <h1 className="text-3xl font-bold font-heading text-brutal-black mb-2">
                        Welcome Back
                    </h1>
                    <p className="text-brutal-black/70 mb-8">
                        Log in to access your leads
                    </p>

                    {error && (
                        <div className="mb-6 p-4 bg-red-100 border-3 border-red-500 text-red-700 font-medium">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block font-bold text-brutal-black mb-2">
                                Email
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
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-brutal w-full text-black"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn-brutal w-full disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Logging in...' : 'Log In →'}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-brutal-black/70">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="font-bold text-brutal-black hover:text-brutal-pink transition-colors">
                            Sign up free
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
