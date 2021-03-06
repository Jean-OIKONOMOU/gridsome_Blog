module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      primary: 'rgb(64, 255, 241)',
      primarydark: '#2C7A7B',
      blogbg: '#181a1b',
      background: '#F7FAFC',
      white: '#FFF',
      darkgray: '#2D3748',
      lightgray: '#A0AEC0'
    },
    screens: {
      'xs': {'max': '767px'}, 
      // => @media (max-width: 639px) { ... } this makes it easier to handle smartphones
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
