import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';

import { Inner, Page } from '@app/components';
import { H2 } from '@app/typography';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Private');

interface IPrivateProps extends RouteComponentProps {}

/**
 * @render react
 * @name Private page
 * @description Private page.
 */

const Private = (props: IPrivateProps) => {
  return (
    <Page>
      <Helmet>
        <title>Private</title>
        <meta name="description" content="The page requires a user to be authenticated to view." />
      </Helmet>
      <Inner p={2}>
        <H2 mb={0}>Private!</H2>
      </Inner>
    </Page>
  );
}

export default Private;
