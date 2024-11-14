/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontSize: {
      normal: '16px',
      title: '25px',
      info: '40px',

    },
    colors: {
      primary: '#125B9A',
      button: '#D9D9D9',
      white: '#FFFFFF',
      orange: '#FF6525',
      placeholder: '#A59A9A'
    }
  },
  plugins: [],
}

