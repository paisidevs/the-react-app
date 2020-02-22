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

const imageUrl =
  'https://papers.co/wallpaper/papers.co-bk17-art-cat-illust-minimal-simple-40-wallpaper.jpg';

export const Basic = () => <Image src={imageUrl} />;
