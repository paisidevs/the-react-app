import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';

import Inner from '@app/components/Inner';
import Page from '@app/components/Page';

import { H2 } from '@app/typography';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('NotFound');

interface INotFoundProps extends RouteComponentProps {}

/**
 * @render react
 * @name NotFound page
 * @description 404 page.
 */

const NotFound = (props: INotFoundProps) => {
  return (
    <Page>
      <Helmet>
        <title>Oops! The page you're looking for doesn't exist.</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      <Inner p={2}>
        <H2 mb={0}>Oops!</H2>
        <p>The page you're looking for doesn't exist.</p>
      </Inner>
    </Page>
  );
}

export default NotFound;
