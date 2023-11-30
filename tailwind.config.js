/** @type {import('tailwindcss').Config} */

const default_fonts = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", ...default_fonts.fontFamily.sans]
      },
      colors: {
        "soft-orange": "hsl(35, 77%, 62%)",
        "soft-red": " hsl(5, 85%, 63%)",
        "off-white": " hsl(36, 100%, 99%)",
        "grayish-blue": " hsl(233, 8%, 79%)",
        "very-dark-blue": " hsl(240, 100%, 5%)",
        "dark-grayish-blue": " hsl(236, 13%, 42%)"
      }
    }
  },
  plugins: [],
}

