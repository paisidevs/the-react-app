import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    isDark?: boolean;
    borders: any[];
    breakpoints: string[];
    buttons: {
      [key: string]: any;
    };
    colors: {
      [key: string]: any;
    };
    fonts: {
      sansSerif: string;
    };
    fontSizes: number[];
    fontWeights: number[];
    letterSpacings: number[];
    maxWidths: number[];
    minWidths: number[];
    space: number[];
  }
}
