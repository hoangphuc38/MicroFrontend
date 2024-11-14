/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontSize: {
      normal: '20px',
      title: '25px',
      info: '40px'
    },
    colors: {
      primary: '#125B9A',
      button: '#D9D9D9',
      white: '#FFFFFF',
      orange: '#FF6525'
    }
  },
  plugins: [],
}

