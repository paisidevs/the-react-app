import React, { lazy, Suspense } from 'react';

type TFactory = () => Promise<{
  default: React.ComponentType<any>;
}>;

type TLoadableOptions = {
  fallback?: React.ReactNode;
};

export type LoadableComponentType = React.LazyExoticComponent<
  React.ComponentType<any>
> & {
  preload: Function;
};

const Loadable = (factory: TFactory, options: TLoadableOptions = {}) => {
  const fallback = options.fallback || null;

  const LazyComponent = lazy(factory) as LoadableComponentType;
  LazyComponent.preload = factory;

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default Loadable;
