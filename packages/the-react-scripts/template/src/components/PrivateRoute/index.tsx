import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuthentication } from '@app/hooks';
import { IRouteProps } from '../Routes';
import LoadingBar from '../LoadingBar';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('PrivateRoute');

interface IPrivateRouteProps extends RouteProps {
  routes?: IRouteProps[];
}

/**
 * @render react
 * @name PrivateRoute component
 * @description PrivateRoute component.
 * @example
 * <PrivateRoute />
 */

const PrivateRoute: FC<IPrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { authenticating, isAuthenticated } = useAuthentication();

  return !authenticating ? (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          // @ts-ignore
          <Component routes={rest.routes} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  ) : (
    <LoadingBar />
  );
};

export default PrivateRoute;
