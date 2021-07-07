const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        gray: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923'
        }
      },
      fontFamily: {
        francis: ['Francois One', ...defaultTheme.fontFamily.sans],
        rubik: ['Rubik', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      ringWidth: ['focus-visible'],
      ringColor: ['focus-visible']
    }
  }
}
