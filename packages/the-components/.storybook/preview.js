import { Global, ThemeProvider } from '@paisidevs/tra-theme';
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
