const defaultTheme = require('tailwindcss/defaultTheme');
const defaultColors = require('tailwindcss/colors');

const colors = {
  ...defaultColors,
  main: {
    DEFAULT: defaultColors.gray[700],
    dark: defaultColors.gray[900],
    contrast: 'white',
  },
  info: defaultColors.yellow[500],
  success: defaultColors.green[500],
  warning: defaultColors.blue[500],
  error: defaultColors.red[500],
};

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{vue,js}', './safelist.txt'],
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
    container: {
      center: true,
      padding: defaultTheme.spacing['4'],
    },
    fontFamily: {
      base: ['Titillium Web', 'sans-serif'],
    },
    fontSize: {
      base: ['18px', '25px'],
      tiny: ['14px', '20px'],
      small: ['16px', '24px'],
      large: ['20px', '30px'],
      huge: ['24px', '32px'],
      intro: ['20px', '30px'],
      h1: ['40px', '50px'],
      h2: ['35px', '40px'],
      h3: ['28px', '35px'],
      h4: ['22px', '25px'],
      h5: ['20px', '25px'],
      h6: ['18px', '25px'],
      button: ['18px', 1],
    },
    screens: {
      xs: '480px',
      sm: '660px',
      md: '820px',
      lg: '980px',
      xl: '1200px',
    },
    colors,

    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--repair-primary, #71b8c5)',
          dark: 'var(--repair-primary-dark, #5A939D)',
          contrast: 'var(--repair-primary-contrast, white)',
        },
        secondary: {
          DEFAULT: 'var(--repair-secondary, #9C7A97)',
          dark: 'var(--repair-secondary-dark, #7C6178)',
          contrast: 'var(--repair-secondary-contrast, white)',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'color': theme('colors.main'),
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.primary.DEFAULT'),
              marginTop: '0.75em',
              marginBottom: '0.5em',
            },
            'h1, h2, h3': {
              fontWeight: 900,
            },
            'h4, h5, h6': {
              fontWeight: 700,
            },
            'h1': {
              fontSize: theme('fontSize.h1.0'),
              lineHeight: theme('fontSize.h1.1'),
            },
            'h2': {
              fontSize: theme('fontSize.h2.0'),
              lineHeight: theme('fontSize.h2.1'),
            },
            'h3': {
              fontSize: theme('fontSize.h3.0'),
              lineHeight: theme('fontSize.h3.1'),
            },
            'h4': {
              fontSize: theme('fontSize.h4.0'),
              lineHeight: theme('fontSize.h4.1'),
            },
            'h5': {
              fontSize: theme('fontSize.h5.0'),
              lineHeight: theme('fontSize.h5.1'),
            },
            'h6': {
              fontSize: theme('fontSize.h6.0'),
              lineHeight: theme('fontSize.h6.1'),
            },
            'ul > li:before': {
              backgroundColor: theme('colors.primary.DEFAULT'),
            },
            'ol > li:before': {
              color: theme('colors.primary.DEFAULT'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('./tailwind/plugins/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
