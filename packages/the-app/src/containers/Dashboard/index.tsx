import {
  Box,
  Grid,
  HorizontalScroller,
  Modal,
  ScrollView,
} from '@app/components';
import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <ScrollView>
      <Box
        backgroundColor="background.surface"
        height={['calc(100vw / (1/1))', 'calc(512px / (1/1))']}
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
                overflow="hidden"
              />
            }
            maxWidth="400px"
          />
        ))}
      </HorizontalScroller>
      <Grid
        gridAutoRows={[
          'minmax(calc(100vw / (16/9)), auto)',
          'minmax(calc(512px / (4/3)), auto)',
        ]}
        gridGap={2}
        gridTemplateColumns={['1fr', null, null, 'repeat(2, 1fr)']}
        padding={2}
        paddingBottom={0}
        margin="0 auto"
        maxWidth="1280px"
      >
        {[0, 0].map((_, idx) => (
          <Box
            key={idx}
            backgroundColor="background.surface"
            borderRadius={2}
            height="100%"
            marginBottom={2}
          />
        ))}
      </Grid>
    </ScrollView>
  );
};
