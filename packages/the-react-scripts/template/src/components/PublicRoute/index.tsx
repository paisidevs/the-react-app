import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import { IRouteProps } from '../Routes';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('PublicRoute');

interface IPublicRouteProps {
  component?: any;
  routes?: IRouteProps[];
};

/**
 * @render react
 * @name PublicRoute component
 * @description PublicRoute component.
 * @example
 * <PublicRoute />
 */

const PublicRoute: FC<IPublicRouteProps> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Component routes={rest.routes} {...props} />
      )}
    />
  );
};

export default PublicRoute;
