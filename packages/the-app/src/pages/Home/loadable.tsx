import { Loader } from '@app/components';
import React from 'react';
import { Loadable } from '../../utilities';

export default Loadable(() => import('./index'), {
  fallback: <Loader />,
});
