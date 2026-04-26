/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        xl: 'calc(var(--radius) * 0.75)',
        '2xl': 'var(--radius)',
        '3xl': 'calc(var(--radius) * 1.5)',
        '4xl': 'calc(var(--radius) * 2)',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
      },
      boxShadow: {
        'teal-sm': '0 2px 8px rgba(6, 129, 142, 0.12)',
        'teal-md': '0 4px 20px rgba(6, 129, 142, 0.18)',
        'teal-lg': '0 8px 40px rgba(6, 129, 142, 0.22)',
        'card': '0 4px 24px rgba(26, 46, 59, 0.06)',
        'card-hover': '0 8px 40px rgba(26, 46, 59, 0.12)',
      },
      keyframes: {
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};