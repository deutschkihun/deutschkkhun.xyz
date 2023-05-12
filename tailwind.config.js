module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      nxl: {max: '100vw'},
      // => @media (max-width: 1920px) { ... }

      '2xl': {max: '1535px'},
      // => @media (max-width: 1535px) { ... }

      xl: {max: '1279px'},
      // => @media (max-width: 1279px) { ... }

      lg: {max: '1023px'},
      // => @media (max-width: 1023px) { ... }

      md: {max: '767px'},
      // => @media (max-width: 767px) { ... }

      sm: {max: '640px'},
      // => @media (max-width: 639px) { ... }
      ssm: {max: '600px'}
    }
  },
  minHeight: {
    '4/5-screen': '80vh'
  },
  animation: {
    'dash-ani': 'dash-ani 2s linear infinite alternate'
  },
  keyframes: {
    'dash-ani': {
      '0%': {'stroke-dashoffset': '700', stroke: 'black'},
      '50%': {'stroke-dashoffset': '350', stroke: 'blue'},
      '100%': {'stroke-dashoffset': '0', stroke: 'red'}
    },
    'fade-bottom': {
      '0%': {
        transform: 'translateY(100px)',
        opacity: 0
      },
      '100%': {
        transform: 'translateY(0)',
        opacity: 1
      }
    }
  },
  plugins: [require('daisyui')]
}
