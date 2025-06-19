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
        background: '#fdfdfd', // Off-white background
        'slate-gray': { // Example slate/soft stone gray
          DEFAULT: '#64748b', // slate-500
          light: '#94a3b8',   // slate-400
          dark: '#475569',    // slate-600
        },
        'stone-gray': { // Example soft stone gray
            DEFAULT: '#78716c', // stone-500
            light: '#a8a29e',   // stone-400
            dark: '#57534e',    // stone-600
        }
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
