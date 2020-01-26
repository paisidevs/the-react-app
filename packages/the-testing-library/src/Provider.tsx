import { theme, ThemeProvider } from '@app/theme';
import { render } from '@testing-library/react';
import React, { FC } from 'react';

const Provider: FC = ({ children }) => (
  // @ts-ignore
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

// Set up context providers using the wrapper option to render.
export const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: Provider, ...options });
