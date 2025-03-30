/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C3B2D', // Dark green from the reference image
          dark: '#152B21',    // Slightly darker shade for hover states
          light: '#2A4D3E',   // Lighter shade for accents
        },
        gray: {
          50: '#F7F7F7',     // Light background color from reference
          600: '#4B5563',    // Text color
          700: '#374151',    // Darker text color
        }
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(20px)' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        steam: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: 1 },
          '100%': { transform: 'translateY(-4px) scale(1.2)', opacity: 0 }
        }
      },
      animation: {
        'scroll': 'scroll 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
        'steam': 'steam 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
