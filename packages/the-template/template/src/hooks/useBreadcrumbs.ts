import React from 'react';
import { BreadcrumbsContext } from '../contexts/BreadcrumbsProvider.context';

export const useBreadcrumbs = () => {
  const context = React.useContext(BreadcrumbsContext);

  if (context === undefined) {
    throw new Error(
      'useBreadcrumbs must be used within an BreadcrumbsProvider',
    );
  }

  return context;
};
