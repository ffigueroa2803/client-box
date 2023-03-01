/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        custom1: '#2C323F',
        custom2: '#7366ff',
        custom3: '#2C323F',
        custom4: '#f8f8f8',
        custom5: '#FFFFFFB3',
        custom6: '#1D1E26',
        custom7: '#51BB25',
        custom8: '#DC3545',

        darkCustom1: '#262932',
        bgColor1: 'rgba(115,102,255,.06)',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
}
