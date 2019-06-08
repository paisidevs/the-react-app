import React, { FC } from 'react';
import { RouteProps, Switch, SwitchProps } from 'react-router-dom';
import { useTransition } from 'react-spring';
import styled from 'styled-components';
import AnimatedWrapper from '../AnimatedWrapper';
import Box from '../Box';

import PrivateRoute from '../PrivateRoute/Loadable';
import PublicRoute from '../PublicRoute/Loadable';
import { useRouter } from '@app/hooks';

export interface IRouteProps extends RouteProps {
  secure?: boolean;
  routes?: IRouteProps[];
}

interface IRoutesProps extends SwitchProps {
  routes: IRouteProps[];
}

const Wrapper = styled(Box)`
  flex: 1;

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: transform, opacity;
  }
`;

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

const Routes: FC<IRoutesProps> = ({ routes }) => {
  const { location } = useRouter();

  const routeTransitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translateY(64px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(32px)' },
  });

  return (
    <Wrapper as="main">
      {
        routeTransitions.map(({ item, props: styleProps, key }) => (
          <AnimatedWrapper key={key} style={styleProps}>
            <Switch location={item}>
              {
                routes.map((
                  { component: Component, exact, path, routes, secure }: IRouteProps,
                  index: number,
                ) => secure ? (
                  <PrivateRoute
                    {...(exact ? { exact: true } : {})}
                    key={index}
                    path={path}
                    component={Component}
                    routes={routes}
                  />
                ) : (
                  <PublicRoute
                    {...(exact ? { exact: true } : {})}
                    key={index}
                    path={path}
                    component={Component}
                    routes={routes}
                  />
                ))
              }
            </Switch>
          </AnimatedWrapper>
        ))
      }
    </Wrapper>
  );
};

export default Routes;
