/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  darkMode: 'media',

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    extend: {
      colors: {
        // pink
        primary: { 
          light: '#E4245F',
          DEFAULT: '#E4245F',
          dark: '#CF193B'
        },

        beige: {
          DEFAULT: '#ECEBE6'
        }, 

        // black
        grey: {
          light: '#474747',
          lighter: '#2e2e2e',
          DEFAULT: '#2b2b2b',
          darker: '#262626',
          dark: '#222',
          darkest: '#1b1b1b'
        }
      },
    }
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
