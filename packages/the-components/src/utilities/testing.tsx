import { theme, ThemeProvider } from '@app/theme';
import { render } from '@testing-library/react';
import React, { FC } from 'react';

const Provider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

// Set up context providers using the wrapper option to render.
const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: Provider, ...options });
// re-export all exports from React Testing Library to make it accessible via test-utils
export * from '@testing-library/react';
// override render method
export { customRender as render };

export const getElementByText = (
  selector: string,
  text: string,
  getByText: any,
) => {
  getByText(
    (content: string, element: HTMLElement) =>
      element.tagName.toLowerCase() === selector.toLowerCase() &&
      content === text,
  );
};
