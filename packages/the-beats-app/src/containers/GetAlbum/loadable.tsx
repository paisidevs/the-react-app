import { Box, Loadable, Loader } from '@elandamor/tra-components';
import React from 'react';

export default Loadable(() => import('./index'), {
  fallback: (
    <Box>
      <Box>
        <Loader />
      </Box>
    </Box>
  ),
});
