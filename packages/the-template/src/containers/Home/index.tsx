import {
  Box,
  Grid,
  HorizontalScroller,
  Image,
  Modal,
  ScrollView,
  Text,
} from '@app/components';
import React from 'react';

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
              >
                <Image src="https://images.unsplash.com/photo-1574804226052-d500cee0ffd8?auto=format&fit=crop&w=640&q=80" />
                <Box p={2}>
                  <Text
                    color="text.default"
                    fontSize={4}
                    fontWeight="bolder"
                    marginBottom={1}
                  >
                    Title
                  </Text>
                  <Text color="text.default">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Text>
                </Box>
              </Box>
            }
            maxWidth="400px"
          />
        ))}
      </HorizontalScroller>
      <Grid
        gridGap={2}
        gridTemplateColumns={['1fr', null, null, 'repeat(2, 1fr)']}
        gridAutoRows={[
          'minmax(calc(100vw / (16/9)), auto)',
          'minmax(calc(512px / (4/3)), auto)',
        ]}
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
