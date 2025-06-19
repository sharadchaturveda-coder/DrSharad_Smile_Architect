const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}', // Kept for completeness, though src/pages may not exist
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'from-[#f6f9fc]',
    'to-[#eaeef3]',
    'bg-[#fdfdfd]',
    // Add other arbitrary values here as needed
  ],
  theme: {
    extend: {
      colors: {
        background: '#111827', // Dark charcoal
        primary: '#111827', // Dark charcoal
        accent: '#38bdf8', // Electric blue
        'off-white': '#f1f5f9', // Off-white text
        'slate-gray': {
          DEFAULT: '#64748b', // slate-500 (can be adjusted or removed if not needed)
          light: '#94a3b8',   // slate-400 (text-slate-400 for secondary text)
          dark: '#475569',    // slate-600
        },
        'stone-gray': {
            DEFAULT: '#78716c', // stone-500 (can be adjusted or removed if not needed)
            light: '#a8a29e',   // stone-400
            dark: '#57534e',    // stone-600
        },
        'brand-charcoal': '#111827',
        'brand-blue': '#38bdf8',
        'brand-off-white': '#f1f5f9',
        'brand-gray-800': '#1f2937', // For dark card backgrounds (bg-gray-800)
      },
      fontFamily: {
        sans: ['Neue Montreal', 'Inter', 'DM Sans', ...fontFamily.sans],
        heading: ['Neue Montreal', ...fontFamily.sans], // Specific stack for headings
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
