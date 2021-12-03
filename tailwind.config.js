module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        background: '#FFFDF5',
        dark: '#222222',
      },
      maxWidth:{
        'card': '500px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
