const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const twConfig = require('./tailwind.config');

//  This config is only to be used by Vitepress

module.exports = {
  plugins: [
    tailwindcss({
      ...twConfig,
      corePlugins: {
        preflight: false,
      },
    }),
    autoprefixer,
  ],
};
