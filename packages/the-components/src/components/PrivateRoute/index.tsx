import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import { IRouteProps } from '../Routes';

interface IPrivateRouteProps extends RouteProps {
  component?: React.ComponentType<any>;
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
  const { authenticating, isAuthenticated } = {
    authenticating: false,
    isAuthenticated: false,
  };

  return !authenticating ? (
    <ErrorBoundary>
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
    </ErrorBoundary>
  ) : null;
};

export default PrivateRoute;
