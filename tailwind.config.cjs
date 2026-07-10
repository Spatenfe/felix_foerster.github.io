/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#f3f4f6',
        surface: '#ffffff',
        border: '#d5d8df',
        ink: '#0b0d12',
        muted: '#4f5564',
        accent: {
          DEFAULT: '#1d2942',
          dark: '#121a2d'
        }
      },
      // Tailwind's default type scale with font sizes and line heights ×1.25.
      fontSize: {
        xs: ['0.9375rem', { lineHeight: '1.25rem' }],
        sm: ['1.09375rem', { lineHeight: '1.5625rem' }],
        base: ['1.25rem', { lineHeight: '1.875rem' }],
        lg: ['1.40625rem', { lineHeight: '2.1875rem' }],
        xl: ['1.5625rem', { lineHeight: '2.1875rem' }],
        '2xl': ['1.875rem', { lineHeight: '2.5rem' }],
        '3xl': ['2.34375rem', { lineHeight: '2.8125rem' }],
        '4xl': ['2.8125rem', { lineHeight: '3.125rem' }],
        '5xl': ['3.75rem', { lineHeight: '1' }],
        '6xl': ['4.6875rem', { lineHeight: '1' }]
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        soft: '0 12px 28px rgba(8, 12, 20, 0.08)',
        card: '0 10px 18px -6px rgba(10, 16, 28, 0.12)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
