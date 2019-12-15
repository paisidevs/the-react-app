import { Box, HorizontalScroller, Modal, ScrollView } from '@app/components';
import React from 'react';
import Login from '../Login';

export const Home: React.FC = () => {
  return (
    <ScrollView>
      <Box
        backgroundColor="background.surface"
        height={['calc(100vw / (4/3))', 'calc(512px / (1/1))']}
        marginBottom={2}
      />
      <HorizontalScroller>
        {[0, 0, 0, 0, 0, 0, 0, 0].map((_, idx) => (
          <Modal
            key={idx}
            trigger={
              <Box
                backgroundColor="background.surface"
                borderRadius={2}
                height="100%"
              />
            }
            maxWidth="400px"
          >
            <Login />
          </Modal>
        ))}
      </HorizontalScroller>
      <Box padding={2} paddingBottom={0} margin="0 auto" maxWidth="1280px">
        {[0, 0].map((_, idx) => (
          <Box
            key={idx}
            backgroundColor="background.surface"
            borderRadius={2}
            height={['calc(100vw / (16/9))', 'calc(512px / (1/1))']}
            marginBottom={2}
          />
        ))}
      </Box>
    </ScrollView>
  );
};
