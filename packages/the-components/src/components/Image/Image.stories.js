import React from 'react';
import { Box } from '../Box';
import { Image } from './index';

export default {
  title: 'Image',
  component: Image,
  decorators: [
    (storyFn) => (
      <Box padding={2} maxWidth="600px">
        {storyFn()}
      </Box>
    ),
  ],
};

const imageUrl = 'https://source.unsplash.com/640x360/?nature,water';

export const Basic = () => <Image aspect={640 / 360} src={imageUrl} />;
