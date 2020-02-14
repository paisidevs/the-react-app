import { Loader } from '@app/components';
import { Loadable } from '@app/utilities';
import React from 'react';

export default Loadable(() => import('./index'), {
  fallback: <Loader />,
});
