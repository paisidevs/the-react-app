import React, { FC } from 'react';
import {
  Route,
  RouteComponentProps,
  RouteProps,
  Switch,
  SwitchProps,
} from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';

export interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  routes?: IRouteProps[];
}

interface IRoutesProps extends SwitchProps {
  isAuthenticated: boolean;
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

const Routes: FC<IRoutesProps> = ({ isAuthenticated, routes }) => {
  const renderRoute = (
    { isPrivate, ...rest }: IRouteProps,
    key: string | number,
  ) => {
    if (isPrivate) {
      return (
        <PrivateRoute key={key} isAuthenticated={isAuthenticated} {...rest} />
      );
    }

    return <PublicRoute key={key} {...rest} />;
  };

  return (
    <Switch>
      {routes.map((route: IRouteProps, index: number) =>
        renderRoute(route, index),
      )}
    </Switch>
  );
};

export default Routes;

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
  routes,
  ...rest
}) => {
  return (
    <ErrorBoundary>
      <Route {...rest}>{Component && <Component routes={routes} />}</Route>
    </ErrorBoundary>
  );
};

interface IPrivateRouteProps extends RouteProps {
  component?: React.ComponentType<any>;
  isAuthenticated: boolean;
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
  // authPath,
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  const handleRedirect = (props: RouteComponentProps<any>) => {
    // onRedirect(props)
    return null;
  };

  return (
    <ErrorBoundary>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated
            ? Component && <Component {...props} />
            : handleRedirect(props)
        }
      />
    </ErrorBoundary>
  );
};
