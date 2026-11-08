/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080808',
          card: '#0f0f11',
          surface: '#141418',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.16)',
          text: '#F5F5F7',
          muted: '#8E8E93',
          subtle: '#636366',
        },
        light: {
          bg: '#FBFBFD',
          card: '#FFFFFF',
          surface: '#F5F5F7',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-hover': 'rgba(0, 0, 0, 0.18)',
          text: '#111113',
          muted: '#636366',
          subtle: '#8E8E93',
        },
        accent: {
          blue: '#2563EB',
          cyan: '#06B6D4',
          indigo: '#4F46E5',
          violet: '#7C3AED',
          electric: '#3B82F6',
          glow: 'rgba(59, 130, 246, 0.25)',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        editorial: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
        cinematic: '0.25em',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
