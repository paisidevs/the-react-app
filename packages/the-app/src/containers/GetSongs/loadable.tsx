import { Box, H3, Loader } from '@app/components';
import { Loadable } from '@app/utilities';
import React from 'react';

export default Loadable(() => import('./index'), {
  fallback: (
    <Box>
      <H3>Songs</H3>
      <Box>
        <Loader />
      </Box>
    </Box>
  ),
});
