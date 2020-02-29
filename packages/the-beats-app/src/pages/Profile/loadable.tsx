import { Loadable, Loader } from '@elandamor/tra-components';
import React from 'react';

export default Loadable(() => import('./index'), {
  fallback: <Loader />,
});
