import { ScrollView } from '@paisidevs/tra-components';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Logo } from '../../components';

const Home: FC = () => {
  return (
    <ScrollView justifyContent="center">
      <Helmet>
        <title>the-react-app - Built with love by @paisidevs</title>
      </Helmet>
      <Logo />
    </ScrollView>
  );
};

export default Home;
