import React, { FC } from 'react';

import AuthenticationProvider from './authenticationProvider.context';
import NetworkStatusProvider from './networkStatus.context';
import ThemeProvider from './themeProvider.context';

interface IAppProvider {
  children: React.ReactNode;
}

export const AppProvider: FC<IAppProvider> = ({ children }) => {
  return (
    <AuthenticationProvider>
      <ThemeProvider>
        <NetworkStatusProvider>
          {children}
        </NetworkStatusProvider>
      </ThemeProvider>
    </AuthenticationProvider>
  );
}
