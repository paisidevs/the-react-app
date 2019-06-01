import React, { FC } from 'react';

import NetworkStatusProvider from './networkStatus.context';
import ThemeProvider from './themeProvider.context';

interface IAppProvider {
  children: React.ReactNode;
}

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  return (
    <ThemeProvider>
      <NetworkStatusProvider>
        {children}
      </NetworkStatusProvider>
    </ThemeProvider>
  );
}
