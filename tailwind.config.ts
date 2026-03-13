import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        navy: {
          50: '#eef3f9',
          100: '#d4e0f0',
          200: '#a9c1e1',
          300: '#7ea2d2',
          400: '#5383c3',
          500: '#1e3a5f',
          600: '#1a3354',
          700: '#152a45',
          800: '#102037',
          900: '#0b1728',
        },
      },
    },
  },
  plugins: [],
}
export default config
