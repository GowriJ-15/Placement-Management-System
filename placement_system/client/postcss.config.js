const colors = require('tailwindcss/colors')
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    theme: {
      extend: {
        colors:{
          fuchsia: colors.fuchsia,
        }
      },
    },
    variants: {},
    plugins: [],
  },
}
