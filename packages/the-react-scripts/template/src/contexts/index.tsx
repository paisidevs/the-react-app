import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import get from 'lodash/get';
import merge from 'lodash/merge';

import baseTheme from '@app/theme';
import { useDarkMode } from '@app/hooks';

import NetworkStatusProvider from './networkStatus.context';

interface IAppProviders {
  children: React.ReactNode;
}

const DEFAULT_STATE = {
  darkMode: false,
  setDarkMode: (mode: boolean) => null,
};

export const AppThemeContext = React.createContext(DEFAULT_STATE);

export const AppProviders: FC<IAppProviders> = ({ children }) => {
  const [darkMode, setDarkMode] = useDarkMode();

  // Merge the color mode with the base theme to create a new theme object
  const getTheme = (mode: string) => merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
    isDark: true,
  })

  const theme = darkMode ? getTheme('dark') : baseTheme;

  return (
    <AppThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>
        <NetworkStatusProvider>
          {children}
        </NetworkStatusProvider>
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}
