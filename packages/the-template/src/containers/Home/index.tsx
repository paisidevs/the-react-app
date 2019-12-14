import { HorizontalScroller, ScrollView } from '@app/components';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <ScrollView justifyContent="center">
      <HorizontalScroller />
    </ScrollView>
  );
};
