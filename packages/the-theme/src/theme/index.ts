import colors from './colors';

const borders = [
  0,
  '1px solid',
  '2px solid',
  '4px solid',
  '8px solid',
  '16px solid',
  '32px solid',
];

export const theme = {
  borders,
  buttons: {
    primary: {
      color: colors.primary.base,
      border: borders[1],
      borderColor: colors.primary.base,
    },
    secondary: {
      color: colors.secondary.base,
      backgroundColor: colors.opacity.transparent,
      border: borders[1],
      borderColor: colors.secondary.base,
    },
  },
  colors,
  fonts: {
    sansSerif: `'Roboto',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen
    ,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 34, 48, 60, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  letterSpacings: [-1.5, -0.5, 0, 0.1, 0.15, 0.25, 0.4, 0.5, 1.25, 1.5],
  breakpoints: ['512px', '768px', '1024px'],
  maxWidths: [320],
  minWidths: [160, 320, 344],
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64],
};
