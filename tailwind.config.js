/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        legal: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        kenya: {
          50: '#fef7ee',
          100: '#fdecc7',
          200: '#fbd58c',
          300: '#f9b851',
          400: '#f79c1d',
          500: '#f17c0e',
          600: '#dc5a09',
          700: '#b63d09',
          800: '#933010',
          900: '#772910',
        },
        professional: {
          gold: '#D4AF37',
          navy: '#1e3a8a',
          burgundy: '#800020'
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      boxShadow: {
        'legal': '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
        'legal-lg': '0 10px 28px 0 rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}