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
  isDark: false,
  borders,
  colors,
  fonts: {
    sansSerif: 'Roboto, sans-serif',
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 34, 48, 60, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  letterSpacings: [-1.5, -0.5, 0, 0.1, 0.15, 0.25, 0.4, 0.5, 1.25, 1.5],
  breakpoints: ['512px', '768px', '1024px'],
  maxWidths: [320, 640, 1280, 1600],
  minWidths: [160, 320, 480, 640, 800, 960],
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64],
  radii: [0, 2, 4, 8],
};
