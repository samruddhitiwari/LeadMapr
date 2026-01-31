/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neo-brutalist color palette
        'brutal-yellow': '#FFE500',
        'brutal-pink': '#FF6B9D',
        'brutal-blue': '#4DEEEA',
        'brutal-green': '#74EE15',
        'brutal-orange': '#FF9F1C',
        'brutal-purple': '#A855F7',
        'brutal-black': '#0A0A0A',
        'brutal-white': '#FAFAFA',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #0A0A0A',
        'brutal-lg': '6px 6px 0px 0px #0A0A0A',
        'brutal-xl': '8px 8px 0px 0px #0A0A0A',
        'brutal-hover': '2px 2px 0px 0px #0A0A0A',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
    },
  },
  plugins: [],
};
