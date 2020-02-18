import { Global, ThemeProvider } from '@elandamor/tra-theme';
import { addDecorator } from '@storybook/react';
import React from 'react';

addDecorator((storyFn) => (
  <ThemeProvider>
    <React.Fragment>
      <Global />
      {storyFn()}
    </React.Fragment>
  </ThemeProvider>
));
