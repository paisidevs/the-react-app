import { Box, H3, Loadable, Loader } from '@elandamor/tra-components';
import React from 'react';

export default Loadable(() => import('./index'), {
  fallback: (
    <Box>
      <H3>Playlists</H3>
      <Box>
        <Loader />
      </Box>
    </Box>
  ),
});
