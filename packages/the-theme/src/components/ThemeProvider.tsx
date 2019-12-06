import { ThemeProvider as SCThemeProvider } from 'emotion-theming';
import get from 'lodash/get';
import merge from 'lodash/merge';
import React, { FC } from 'react';
import { useDarkMode } from '../hooks';
import { theme as baseTheme } from '../theme';

interface IThemeProvider {
  children: React.ReactChild;
}

const DEFAULT_STATE = {
  darkMode: false,
  setDarkMode: (_mode: boolean) => null,
  theme: baseTheme,
};

const ThemeContext = React.createContext(DEFAULT_STATE);

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [darkMode, setDarkMode] = useDarkMode();

  // Merge the color mode with the base theme to create a new theme object
  const getTheme = (mode: string) =>
    merge({}, baseTheme, {
      colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
      isDark: true,
    });

  const theme = darkMode ? getTheme('dark') : baseTheme;

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, theme }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
