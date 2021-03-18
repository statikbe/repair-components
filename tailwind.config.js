const defaultTheme = require("tailwindcss/defaultTheme");
const colorShade = require("./src/tailwind/plugins/color-shades");
const aspectRatio = require("@tailwindcss/aspect-ratio");

const siteColors = {
  primary: {
    default: "#71B8C5",
    contrast: "#FFFFFF",
    hover: "#49A2B2",
    hoverContrast: "#FFFFFF",
  },
  secondary: {
    default: "#9C7A97",
    contrast: "#FFFFFF",
    hover: "#896684",
    hoverContrast: "#FFFFFF",
  },
};

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      default: "1px",
      0: "0",
      4: "4px",
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      primary: siteColors.primary.default,
      secondary: siteColors.secondary.default,
    }),
    container: {
      center: true,
      padding: defaultTheme.spacing["4"],
    },
    fontFamily: {
      base: ["Titillium Web", "sans-serif"],
    },
    fontSize: {
      h3: "22px",
    },
    screens: {
      xs: "480px",
      sm: "660px",
      md: "820px",
      lg: "980px",
      xl: "1200px",
    },
    colors: {
      ...defaultTheme.colors,
      ...siteColors,
      dark: "#333333",
      light: "#f5f5f5",
      gray: {
        ...defaultTheme.colors.gray,
        100: "#f5f5f5",
      },
    },
    // aspectRatio: {
    //   'none': 0,
    //   'square': [1, 1],
    //   '16/9': [16, 9],
    //   '4/3': [4, 3],
    //   '21/9': [21, 9],
    // },
    extend: {
      maxWidth: {
        flyout: "280px",
        modal: "50vw",
        logo: "150px",
      },
      zIndex: {
        99: "99",
        100: "100",
        999: "999",
      },
      boxShadow: {
        card: "0 0 30px 0 rgba(0,0,0,0.15)",
        focus: "0 0 0 3px rgba(238,71,55,0.5)",
      },
      inset: {
        "1/2": "50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [colorShade(siteColors), aspectRatio],
};
