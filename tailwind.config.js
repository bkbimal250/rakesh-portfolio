/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Clash Display', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        night: {
          950: '#020617',
          900: '#0f172a',
        },
        neon: {
          cyan: '#22d3ee',
          emerald: '#34d399',
          violet: '#8b5cf6',
        },
      },
      boxShadow: {
        glow: '0 10px 40px rgba(15, 23, 42, 0.45)',
        'glow-cyan': '0 25px 60px rgba(14, 165, 233, 0.35)',
      },
      backdropBlur: {
        20: '20px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-18px,0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.95)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        'float-delayed': 'float 12s ease-in-out infinite',
        pulse: 'pulse 4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
      backgroundImage: {
        'orb-cyan': 'radial-gradient(circle at top left, rgba(20, 184, 166, 0.12), transparent 45%)',
        'orb-blue': 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.12), transparent 45%)',
        'hero-overlay':
          'linear-gradient(120deg, rgba(34, 211, 238, 0.24), rgba(139, 92, 246, 0.18), rgba(34, 197, 94, 0.16))',
      },
    },
  },
  plugins: [],
}
