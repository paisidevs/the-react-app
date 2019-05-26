import React, { Suspense } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
// Components
import { ErrorBoundary, Header, LoadingBar, Routes } from '@app/components';
// Contexts
import { AppProviders } from '@app/contexts';
// Routes
import routes from '@app/routes';
// Styles
import { Wrapper } from './styles';

import GlobalStyles from '@app/global-styles';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('App');

export interface IAppProps extends RouteComponentProps {}

/**
 * @render react
 * @name App container
 * @description The skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar).
 */

const App = () => (
  <AppProviders>
    <Wrapper>
      <Normalize />
      <GlobalStyles />
      <ErrorBoundary>
        <Header alignItems="center" flex="none" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingBar />}>
          <Routes routes={routes} />
        </Suspense>
      </ErrorBoundary>
    </Wrapper>
  </AppProviders>
);

export default withRouter(App);
