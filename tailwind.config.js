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
        // Premium Digital Marketing Portfolio Color System
        // Primary Colors - Trust, Technology, Professionalism
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Main primary
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
          DEFAULT: '#0ea5e9',
        },
        // Accent Colors - Growth, Success, Results
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399', // Main accent
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
          DEFAULT: '#34d399',
        },
        // Secondary Colors - Innovation, Creativity
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
          DEFAULT: '#9333ea',
        },
        // Neutral Colors - Backgrounds & Text
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a', // Main dark background
          950: '#020617', // Deepest dark
          DEFAULT: '#0f172a',
        },
        // Semantic Colors
        success: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#f87171',
          dark: '#dc2626',
        },
        info: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb',
        },
        // Legacy support (keeping for backward compatibility)
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
        'glow-primary': '0 25px 60px rgba(14, 165, 233, 0.35)',
        'glow-accent': '0 25px 60px rgba(52, 211, 153, 0.35)',
        'glow-secondary': '0 25px 60px rgba(147, 51, 234, 0.35)',
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
        // Primary gradients
        'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #34d399 100%)',
        'gradient-primary-hover': 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #10b981 100%)',
        // Accent gradients
        'gradient-accent': 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
        // Secondary gradients
        'gradient-secondary': 'linear-gradient(135deg, #9333ea 0%, #a855f7 100%)',
        // Hero gradients
        'gradient-hero': 'linear-gradient(135deg, #0ea5e9 0%, #9333ea 50%, #34d399 100%)',
        // Orb effects
        'orb-primary': 'radial-gradient(circle at top left, rgba(14, 165, 233, 0.15), transparent 50%)',
        'orb-accent': 'radial-gradient(circle at top right, rgba(52, 211, 153, 0.15), transparent 50%)',
        'orb-secondary': 'radial-gradient(circle at bottom left, rgba(147, 51, 234, 0.12), transparent 50%)',
        // Legacy support
        'orb-cyan': 'radial-gradient(circle at top left, rgba(20, 184, 166, 0.12), transparent 45%)',
        'orb-blue': 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.12), transparent 45%)',
        'hero-overlay':
          'linear-gradient(120deg, rgba(14, 165, 233, 0.24), rgba(147, 51, 234, 0.18), rgba(52, 211, 153, 0.16))',
      },
    },
  },
  plugins: [],
}
