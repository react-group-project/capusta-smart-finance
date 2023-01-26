export const theme = {
  breakpoints: ['480px', '768px', '1280px'],
  fonts: {},
  fontSizes: [12, 14, 16, 20, 24, 32],
  fontWeights: {},
  lineHeights: {},
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    background: '#F5F6FB',
    kapusta: '#DFE2EB',
    primaryText: '#52555F',
    transparentPrimaryText: 'rgba(82, 85, 95, 0.7)',
    placeholderText: '#A6ABB9',
    errorText: '#EB5757',
    accent: '#FF751D',
    inputBackground: '#F6F7FB',
    avatarBackground: '#F5F6FA',
    devider: '#E0E5EB',
    tooltipBackground:
      'linear-gradient(117.84deg, #1D346A 2.84%, #031634 67.28%)',
    tabBackground: '#FAFBFD',
    tabBackgroundActive: '#FEFEFE',

    lightGrey: '#C7CCDC',
    inputBorder: '#F6F7FC',
  },
  space: [0, 4, 8, 16, 32, 64],
  sizes: [],
  borders: {
    balance: '2px solid #FFFFFF',
  },
  radii: [16, 30, 110],
  shadows: {
    auth: '0px 10px 60px rgba(170, 178, 197, 0.2)',
    modal: '10px 10px 30px rgba(82, 85, 95, 0.4)',
    tooltip: '0px 10px 60px rgba(170, 178, 197, 0.2)',
  },
  filters: {
    googleButton: 'drop-shadow(1px 2px 3px rgba(170, 178, 197, 0.2))',
    primaryButton: 'drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15))',
    accentButton: 'drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35))',
  },
};

theme.radii.small = theme.radii[0];
theme.radii.medium = theme.radii[1];
theme.radii.large = theme.radii[2];

theme.mediaQueries = {
  small: `@media screen and (min-width: ${theme.breakpoints[0]})`,
  medium: `@media screen and (min-width: ${theme.breakpoints[1]})`,
  large: `@media screen and (min-width: ${theme.breakpoints[2]})`,
};
