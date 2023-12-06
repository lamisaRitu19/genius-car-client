/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark1: '#151515',
      dark12: '#2C2C2C',
      dark2: '#444444',
      DEFAULT: '#737373',
      dark4: '#A2A2A2',
      dark5: '#D0D0D0',
      dark6: '#E8E8E8',
      dark7: '#F3F3F3',
      white: '#FFFFFF',
      orange: '#FF3811',
      amber: '#FF912C'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

