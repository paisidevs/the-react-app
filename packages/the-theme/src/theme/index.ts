import colors from './colors';
import typography from './typography';

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
  typography,
  breakpoints: ['512px', '768px', '1024px'],
  maxWidths: [320],
  minWidths: [160, 320, 344],
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64],
};
