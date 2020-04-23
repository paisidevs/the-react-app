export default {
  background: {
    base: '#F0F2F5',
    surface: '#FFFFFF',
  },
  border: {
    default: 'rgba(0,0,0,0.2)',
  },
  blue: {
    50: '#f7f9fe',
    100: '#e7eefd',
    200: '#d5e1fc',
    300: '#c1d3fa',
    400: '#acc4f8',
    500: '#93b3f6',
    600: '#779ef4',
    700: '#5385f1',
    800: '#2a64e0',
    900: '#193b84',
  },
  gray: {
    50: '#f9f9fa',
    100: '#ecedf0',
    200: '#dee1e6',
    300: '#d0d3da',
    400: '#bfc4ce',
    500: '#adb3c0',
    600: '#99a0b0',
    700: '#80899d',
    800: '#656c7c',
    900: '#3b3f49',
  },
  intent: {
    success: '#1BE597',
    warning: '#FFBB3C',
    error: '#FF3567',
    info: '#003FBB',
  },
  modes: {
    dark: {
      background: { base: '#282c35', surface: '#373c49' },
      border: { default: 'hsla(0,0%,100%,0.2)' },
      intent: {
        info: '#7395FF',
      },
      primary: {
        base: '#FFF', // Intended > primary > dark
      },
      text: { default: '#FFFFFF', onPrimary: '#222222' },
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
    base: '#222222', // Intended > #2D68EE
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
    onPrimary: '#FFFFFF',
  },
};
