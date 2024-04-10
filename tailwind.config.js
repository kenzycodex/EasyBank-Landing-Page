/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '375px',
      desktop: '976px',
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      gray: {
        100: 'hsl(0, 0%, 98%)',
        200: 'hsl(220, 16%, 96%)',
        300: 'hsl(233, 8%, 62%)',
      },
      blue: ' hsl(233, 26%, 24%)',
      green: 'hsl(136, 65%, 51%)',
      cyan: ' hsl(192, 70%, 51%)',
    },
    fontFamily: {
      Sans: ['Public Sans', 'sans-serif'],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      bold: '700',
    },
    fontSize: {
      base: '18px',
    },
    extend: {},
  },
  plugins: [],
};
