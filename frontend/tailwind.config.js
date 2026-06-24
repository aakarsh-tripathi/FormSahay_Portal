/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portal: {
          bg: 'var(--fs-bg)',
          'bg-alt': 'var(--fs-bg-alt)',
          card: 'var(--fs-card)',
          primary: 'var(--fs-primary)',
          'primary-hover': 'var(--fs-primary-hover)',
          text: 'var(--fs-text)',
          'text-secondary': 'var(--fs-text-secondary)',
          border: 'var(--fs-border)',
          success: 'var(--fs-success)',
          warning: 'var(--fs-warning)',
          error: 'var(--fs-error)',
        },
        primary: {
          light: '#2563EB',
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
        },
        secondary: {
          light: '#64748B',
          DEFAULT: '#475569',
          dark: '#334155',
        },
        govgreen: '#16A34A',
        govsaffron: '#D97706',
        errorred: '#DC2626',
      },
      borderRadius: {
        card: '8px',
        button: '6px',
        input: '6px',
        small: '4px',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.04)',
        medium: '0 4px 12px rgba(15, 23, 42, 0.08), 0 2px 4px rgba(15, 23, 42, 0.04)',
        'medium-dark': '0 4px 12px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
