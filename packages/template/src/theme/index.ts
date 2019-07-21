import { DefaultTheme } from 'styled-components';

export const GENERATORS = {
  spacing: (length: number, baseline: number) =>
    Array.from({ length }, (_, i: number) => baseline * ++i),
};

export const LAYOUT = {
  baseline: 8, // dp
};

const borders = [
  0,
  '1px solid',
  '2px solid',
  '4px solid',
  '8px solid',
  '16px solid',
  '32px solid',
];

const colors = {
  background: {
    base: '#F0F2F5',
    surface: '#FFFFFF',
  },
  border: {
    default: 'rgba(0,0,0,0.2)',
  },
  intent: {
    success: '#1BE597',
    successDark: '#1BE597',
    successLight: '#1BE597',
    warning: '#FFBB3C',
    warningDark: '#FFBB3C',
    warningLight: '#FFBB3C',
    error: '#FF3567',
    errorDark: '#FF3567',
    errorLight: '#FF3567',
    info: '#003FBB',
  },
  modes: {
    dark: {
      background: { base: '#282c35', surface: '#373c49' },
      border: { default: 'hsla(0,0%,100%,0.2)' },
      intent: {
        info: '#7395FF',
      },
      text: { default: '#FFFFFF' },
    },
  },
  opacity: {
    transparent: 'transparent',
    blacks: [
      'rgba(0,0,0,.0125)',
      'rgba(0,0,0,.025)',
      'rgba(0,0,0,.05)',
      'rgba(0,0,0,.1)',
      'rgba(0,0,0,.2)',
      'rgba(0,0,0,.3)',
      'rgba(0,0,0,.4)',
      'rgba(0,0,0,.5)',
      'rgba(0,0,0,.6)',
      'rgba(0,0,0,.7)',
      'rgba(0,0,0,.8)',
      'rgba(0,0,0,.9)',
    ],
    whites: [
      'rgba(255,255,255,.0125)',
      'rgba(255,255,255,.025)',
      'rgba(255,255,255,.05)',
      'rgba(255,255,255,.1)',
      'rgba(255,255,255,.2)',
      'rgba(255,255,255,.3)',
      'rgba(255,255,255,.4)',
      'rgba(255,255,255,.5)',
      'rgba(255,255,255,.6)',
      'rgba(255,255,255,.7)',
      'rgba(255,255,255,.8)',
      'rgba(255,255,255,.9)',
    ],
  },
  primary: {
    base: '#2D68EE',
    dark: '#003FBB',
    light: '#7395FF',
  },
  secondary: {
    base: '#002699',
    dark: '#00016A',
    light: '#514FCB',
  },
  solid: {
    black: '#000000',
    white: '#FFFFFF',
  },
  text: {
    default: '#222222',
  },
};

export const theme: DefaultTheme = {
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
  // Typography
  fonts: {
    sansSerif: `'Roboto',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen
    ,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 34, 48, 60, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  letterSpacings: [-1.5, -0.5, 0, 0.1, 0.15, 0.25, 0.4, 0.5, 1.25, 1.5],
  // Layout
  breakpoints: ['512px', '768px', '1024px'],
  maxWidths: [320],
  minWidths: [160, 320, 344],
  space: [0].concat(GENERATORS.spacing(10, LAYOUT.baseline)),
};

export default theme;
