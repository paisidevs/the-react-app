import React from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationProvider.context';

export const useAuthentication = () => {
  const context = React.useContext(AuthenticationContext);

  if (context === undefined) {
    throw new Error(
      'useAuthentication must be used within an AuthenticationProvider',
    );
  }

  return context;
};
