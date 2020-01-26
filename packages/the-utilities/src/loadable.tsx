import React, { lazy, Suspense } from 'react';

interface ILoadableOptions {
  fallback?: React.ReactNode;
}

export const Loadable = (importFunc: any, options: ILoadableOptions = {}) => {
  const LazyComponent = lazy(importFunc);
  const fallback = options.fallback || null;

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
