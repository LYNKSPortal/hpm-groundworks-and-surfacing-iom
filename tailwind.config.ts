import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          primary: '#43D5E9',
          secondary: '#7EF3FF',
          DEFAULT: '#43D5E9',
        },
        black: {
          DEFAULT: '#050505',
          dark: '#0A0A0A',
          charcoal: '#101114',
        },
        light: {
          DEFAULT: '#F7F7F7',
          alt: '#FAFAFA',
        },
        muted: '#6B7280',
      },
      fontFamily: {
        heading: ['var(--font-chakra)', 'sans-serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        'cyan-gradient': 'linear-gradient(135deg, #43D5E9, #7EF3FF)',
        'dark-gradient': 'linear-gradient(180deg, #050505 0%, #101114 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(5,5,5,0.75) 0%, rgba(5,5,5,0.4) 60%, rgba(247,247,247,1) 100%)',
        'grid-pattern': 'linear-gradient(rgba(67,213,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(67,213,233,0.05) 1px, transparent 1px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(67, 213, 233, 0.3)' },
          to: { boxShadow: '0 0 40px rgba(67, 213, 233, 0.6)' },
        },
      },
      maxWidth: {
        'site': '1450px',
      },
      boxShadow: {
        'cyan': '0 0 30px rgba(67, 213, 233, 0.3)',
        'cyan-lg': '0 0 60px rgba(67, 213, 233, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config
