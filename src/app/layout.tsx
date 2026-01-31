import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Fira_Code } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const firaCode = Fira_Code({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "LeadMapr - Google Maps Lead Generator",
    description: "Turn Google Maps searches into clean, outreach-ready business leads. Verified leads for freelancers, agencies, and local businesses.",
    keywords: ["lead generation", "Google Maps", "business leads", "B2B", "sales leads", "local business"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${firaCode.variable} ${spaceGrotesk.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
