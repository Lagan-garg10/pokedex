/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom1':'rgba(255, 255, 255, 0.125)',
        accent: 'var(--accent-color)'
      },
      backgroundColor: {
        'white-opacity': 'rgba(255, 255, 255, 0.125)'
      },
      maxInlineSize: {
        'full': '100%',
        'auto': 'auto',
      },
      gridAutoRows: {
        '150': '150px',
      },
      maxBlockSize: {
        'full': '100%',
        'auto': 'auto',
      },
      boxShadow: {
        custom: '0 5px 15px rgba(0, 0, 0, 0.35)', // Custom shadow
      },
      letterSpacing: {
        '1': '0.1rem',
        '2': '0.2rem',
        '3': '0.3rem'
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.max-inline-size-full': {
          'max-inline-size': '100%',
        },
        '.max-inline-size-auto': {
          'max-inline-size': 'auto',
        },
        '.max-block-size-full': {
          'max-block-size': '100%',
        },
        '.max-block-size-auto': {
          'max-block-size': 'auto',
        },
      });
    },
  ],
}
