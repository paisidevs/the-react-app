import React, { FC } from 'react';
import { Route, RouteProps, Switch, RouteComponentProps } from 'react-router-dom';
import { useTransition } from 'react-spring';
import AnimatedWrapper from '../AnimatedWrapper';
import Box from '../Box';
import styled from 'styled-components';

export interface IRouteProps extends RouteProps {
  routes?: IRouteProps[];
}

interface IRoutesProps extends RouteComponentProps {
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

const Routes: FC<IRoutesProps> = ({ location, routes }) => {
  const routeTransitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translateY(64px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(64px)' },
  });

  return (<Wrapper as="main">
    {
      routeTransitions.map(({ item, props: styleProps, key }) => (
        <AnimatedWrapper key={key} style={styleProps}>
          <Switch location={item}>
            {
              routes.map((
                { component: Component, exact, path, routes }: IRouteProps,
                index: number,
              ) => (
                <Route
                  {...(exact ? { exact } : {})}
                  key={index}
                  path={path}
                  render={(props: IRouteProps) => (
                    // pass the sub-routes down to keep nesting
                    // @ts-ignore
                    <Component routes={routes} {...props} />
                  )}
                />
              ))
            }
          </Switch>
        </AnimatedWrapper>
      ))
    }
  </Wrapper>);
};

export default Routes;
