import React, { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import { IRouteProps } from '../Routes';

interface IPublicRouteProps extends RouteProps {
  component?: React.ComponentType<any>;
  routes?: IRouteProps[];
}

/**
 * @render react
 * @name PublicRoute component
 * @description PublicRoute component.
 * @example
 * <PublicRoute />
 */

const PublicRoute: FC<IPublicRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <ErrorBoundary>
      <Route
        {...rest}
        render={(props) =>
          Component && <Component routes={rest.routes} {...props} />
        }
      />
    </ErrorBoundary>
  );
};

export default PublicRoute;
