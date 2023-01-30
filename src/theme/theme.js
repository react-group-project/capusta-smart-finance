export const theme = {
  breakpoints: ['480px', '768px', '1280px'],
  fonts: {
    Roboto: '"Roboto", sans-serif',
    Montserrat: '"Montserrat", sans-serif',
  },
  fontSizes: ['8px', '10px', '12px', '13px', '14px', '16px'],
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  lineHeights: {
    small: 16 / 14, // google button, modal text, auth input text
    base: 14 / 12, // main text, login/registration button text, avatar
  },
  letterSpacings: {
    none: '0em', // tooltip
    small: '0.02em', // google/login/registration/confirm/input/clear button, balance text, balance amaunt, tabs, input balance, table header, modal text
    base: '0.04em',
    large: '0.18em', // smart finance
  },
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    orange: {
      light: '#FFDAC0', // chart secondary
      base: '#FF751D', // accent , chart primary
    },
    red: {
      light: '#EB5757', // form error text
      base: '#E53935', // negative balance text color
      dark: '#E7192E', // table negative balance text color
    },
    green: {
      base: '#407946', // table positive balance text color
    },
    grey: {
      light: '#E0E5EB', // devider
      base: '#A6ABB9', // login/register input placeholder
      dark: '#52555F', // primary text color,
      alpha: 'rgba(82, 85, 95, 0.7)', // primary text color with transparent 0.7
    },
    lilac: {
      light: '#FEFEFE', // tab background active,
      base: '#F5F6FB', // body background, expenses icon background, avatar background
      dark: '#F6F7FB', // table header background, login/register input background
    },
    violet: {
      light: '#F6F7FC', // input border color,
      base: '#DFE2EB', // kapusta svg,
      dark: '#C7CCDC',
    },
    blue: {
      light: '#F2F5FC',
      base: '#FAFBFD', // tab background
      dark: '#071F41', // expenses icons normal color
    },
  },
  borders: {
    white: '2px solid #FFFFFF',
    grey: '2px solid #F6F7FC',
  },
  radii: [16, 20, 30, 110],
  shadows: {
    base: '0px 10px 60px rgba(170, 178, 197, 0.2)', // auth, box (), tooltip
    modal: '10px 10px 30px rgba(82, 85, 95, 0.4)',
    selectDropdown: '0px 3px 4px rgba(170, 178, 197, 0.4)',
    mobile: '5px 10px 20px rgba(170, 178, 197, 0.4)',
    greyOutline: 'inset 0px 0px 0px 2px rgba(246,247,252,1)',
    whiteOutline: 'inset 0px 0px 0px 2px rgba(255,255,255,1)',
  },
  filters: {
    googleButton: 'drop-shadow(1px 2px 3px rgba(170, 178, 197, 0.2))',
    primaryButton: 'drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15))',
    accentButton: 'drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35))',
  },
  gradients: {
    tooltipBackground:
      'linear-gradient(117.84deg, #1D346A 2.84%, #031634 67.28%)',
  },
};

theme.breakpoints.mobile = theme.breakpoints[0];
theme.breakpoints.tablet = theme.breakpoints[1];
theme.breakpoints.desktop = theme.breakpoints[2];

theme.radii.sm = theme.radii[0];
theme.radii.md = theme.radii[1];
theme.radii.lg = theme.radii[2];
theme.radii.xl = theme.radii[3];
