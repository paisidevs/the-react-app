import { Button, Inner, Page } from '@app/components';
import { useAuthentication } from '@app/hooks';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { H2 } from 'the-react-components';

interface IAuthProps extends RouteComponentProps {}

/**
 * @render react
 * @name Auth page
 * @description Auth page.
 */

const Auth = ({ location }: IAuthProps) => {
  const { isAuthenticated, signIn } = useAuthentication();

  return !isAuthenticated ? (
    <Page>
      <Helmet>
        <title>Auth</title>
        <meta name="description" content="The page authenticates a user" />
      </Helmet>
      <Inner p={2}>
        <H2 mb={0}>Authenticator</H2>
        <Button onClick={signIn} text="Authenticate" />
      </Inner>
    </Page>
  ) : (
    <Redirect
      to={
        location && location.state && location.state.from
          ? location.state.from
          : '/'
      }
    />
  );
};

export default Auth;
