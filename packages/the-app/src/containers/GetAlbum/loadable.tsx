import { Box, Loader } from '@app/components';
import React from 'react';
import { Loadable } from '../../utilities';

export default Loadable(() => import('./index'), {
  fallback: (
    <Box>
      <Box>
        <Loader />
      </Box>
    </Box>
  ),
});
