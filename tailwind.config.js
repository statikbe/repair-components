const defaultTheme = require('tailwindcss/defaultTheme');
const defaultColors = require('tailwindcss/colors');

const colors = {
  ...defaultColors,
  main: {
    DEFAULT: defaultColors.gray[800],
    dark: defaultColors.gray[900],
    contrast: 'white',
  },
  primary: {
    DEFAULT: '#71b8c5',
    dark: '#5A939D',
    contrast: 'white',
  },
  secondary: {
    DEFAULT: '#9C7A97',
    dark: '#7C6178',
    contrast: 'white',
  },
  info: defaultColors.yellow[500],
  success: defaultColors.green[500],
  warning: defaultColors.blue[500],
  error: defaultColors.red[500],
};

module.exports = {
  purge: {
    content: ['./tailwind.safelist.js'],
    options: {
      whitelistPatterns: [/^multiselect(.*)/],
      safelist: require('./tailwind.safelist.js'),
    },
  },
  darkMode: false,
  theme: {
    borderWidth: {
      default: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
    },
    // borderColor: colors,
    container: {
      center: true,
      padding: defaultTheme.spacing['4'],
    },
    fontFamily: {
      base: ['Titillium Web', 'sans-serif'],
    },
    fontSize: {
      base: ['18px', { lineHeight: '25px', letterSpacing: 'normal' }],
      tiny: ['14px', { lineHeight: '20px', letterSpacing: 'normal' }],
      small: ['16px', { lineHeight: '24px', letterSpacing: 'normal' }],
      large: ['20px', { lineHeight: '30px', letterSpacing: 'normal' }],
      huge: ['24px', { lineHeight: '32px', letterSpacing: 'normal' }],
      intro: ['20px', { lineHeight: '30px', letterSpacing: 'normal' }],
      h1: ['40px', { lineHeight: '50px', letterSpacing: 'normal' }],
      h2: ['35px', { lineHeight: '40px', letterSpacing: 'normal' }],
      h3: ['28px', { lineHeight: '35px', letterSpacing: 'normal' }],
      h4: ['22px', { lineHeight: '25px', letterSpacing: 'normal' }],
      h5: ['20px', { lineHeight: '25px', letterSpacing: 'normal' }],
      h6: ['18px', { lineHeight: '25px', letterSpacing: 'normal' }],
      button: ['18px', { lineHeight: 1, letterSpacing: 'normal' }],
    },
    screens: {
      xs: '480px',
      sm: '660px',
      md: '820px',
      lg: '980px',
      xl: '1200px',
    },
    colors,
    // aspectRatio: {
    //   'none': 0,
    //   'square': [1, 1],
    //   '16/9': [16, 9],
    //   '4/3': [4, 3],
    //   '21/9': [21, 9],
    // },
    // extend: {
    //   maxWidth: {
    //     flyout: '280px',
    //     modal: '50vw',
    //     logo: '150px',
    //   },
    //   zIndex: {
    //     99: '99',
    //     100: '100',
    //     999: '999',
    //   },
    //   boxShadow: {
    //     card: '0 0 30px 0 rgba(0,0,0,0.15)',
    //     focus: '0 0 0 3px rgba(238,71,55,0.5)',
    //   },
    //   inset: {
    //     '1/2': '50%',
    //   },
    // },
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [
    require('@tailwindcss/typography'),
    require('./tailwind/plugins/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
