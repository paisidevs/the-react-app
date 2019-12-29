import { styled } from '@app/theme';
import React, { FC } from 'react';
import { Route, RouteProps, Switch, SwitchProps } from 'react-router-dom';
import { useTransition } from 'react-spring';
import { Animated } from '../Animated';
import { Box } from '../Box';
import { ErrorBoundary } from '../ErrorBoundary';

export interface IRouteProps extends RouteProps {
  routes?: IRouteProps[];
}

interface IRoutesProps extends SwitchProps {
  routes: IRouteProps[];
}

const Wrapper = styled(Box)`
  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: transform, opacity;
    z-index: 0;
  }
`;

const transitionConfig = {
  from: { opacity: 0, transform: 'translateY(64px)' },
  enter: { opacity: 1, transform: 'translateY(0)' },
  leave: { opacity: 0, transform: 'translateY(32px)' },
};

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
  const routeTransitions = useTransition(
    location,
    ({ pathname }) => pathname,
    transitionConfig,
  );

  return (
    <Wrapper flex={1}>
      {routeTransitions.map(({ item, props: styleProps, key }) => (
        <Animated key={key} style={styleProps}>
          <Switch location={item}>
            {routes.map(({ ...rest }: IRouteProps, index: number) => (
              <PublicRoute key={index} {...rest} />
            ))}
          </Switch>
        </Animated>
      ))}
    </Wrapper>
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
  routes,
  ...rest
}) => {
  return (
    <ErrorBoundary>
      <Route
        {...rest}
        render={(props) =>
          Component && <Component routes={routes} {...props} />
        }
      />
    </ErrorBoundary>
  );
};

// interface IPrivateRouteProps extends RouteProps {
//   component?: React.ComponentType<any>;
//   routes?: IRouteProps[];
// }

// /**
//  * @render react
//  * @name PrivateRoute component
//  * @description PrivateRoute component.
//  * @example
//  * <PrivateRoute />
//  */

// const PrivateRoute: FC<IPrivateRouteProps> = ({
//   component: Component,
//   ...rest
// }) => {
//   const { isAuthenticated } = useAuthentication();

//   return (
//     <ErrorBoundary>
//       <Route
//         {...rest}
//         render={(props) =>
//           isAuthenticated ? (
//             Component && <Component {...props} />
//           ) : (
//             <Redirect
//               to={{
//                 pathname: '/auth/login',
//                 state: { from: props.location },
//               }}
//             />
//           )
//         }
//       />
//     </ErrorBoundary>
//   );
// };
