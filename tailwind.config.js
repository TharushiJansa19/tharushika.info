/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#05060a',
          900: '#0a0d16',
          800: '#111524',
          700: '#1a1f33',
        },
        accent: {
          DEFAULT: '#6ee7f9',
          violet: '#a78bfa',
          pink: '#f472b6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'aurora':
          'radial-gradient(60% 50% at 20% 20%, rgba(110,231,249,0.18) 0%, rgba(110,231,249,0) 60%), radial-gradient(50% 40% at 80% 0%, rgba(167,139,250,0.22) 0%, rgba(167,139,250,0) 60%), radial-gradient(60% 50% at 50% 100%, rgba(244,114,182,0.14) 0%, rgba(244,114,182,0) 60%)',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 1s infinite',
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
