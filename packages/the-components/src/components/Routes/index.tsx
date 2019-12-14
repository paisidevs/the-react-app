import React, { FC } from 'react';
import { Route, RouteProps, Switch, SwitchProps } from 'react-router-dom';
import { ErrorBoundary } from '../ErrorBoundary';

export interface IRouteProps extends RouteProps {
  routes?: IRouteProps[];
}

interface IRoutesProps extends SwitchProps {
  routes: IRouteProps[];
}

/**
 * @render react
 * @name Routes component
 * @description Routes component.
 * @example
 * <Routes
 *  routes={[
 *    {
 *      exact: true,
 *      path: '/',
 *      component: Home,
 *    }
 *  ]}
 * />
 */

export const Routes: FC<IRoutesProps> = ({ location, routes }) => {
  return (
    <Switch location={location}>
      {routes.map(({ ...rest }: IRouteProps, index: number) => (
        <PublicRoute key={index} {...rest} />
      ))}
    </Switch>
  );
};

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
