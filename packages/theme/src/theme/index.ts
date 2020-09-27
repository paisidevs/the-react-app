import { DefaultTheme, theme as chakraTheme } from '@chakra-ui/core';

export const theme: DefaultTheme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    blue: {
      ...chakraTheme.colors.blue,
      500: '#007AFF',
    },
  },
};

export type Theme = typeof theme;
