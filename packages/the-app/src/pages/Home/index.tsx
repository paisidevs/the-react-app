import { ScrollView } from '@app/components';
import React from 'react';
import { Redirect } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <ScrollView>
      <Redirect to="/library" />
    </ScrollView>
  );
};

export default Home;
