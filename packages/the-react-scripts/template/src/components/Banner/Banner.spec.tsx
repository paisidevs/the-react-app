// Banner.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Banner from './index';

describe('Banner', () => {
  it('should render without crashing', () => {
    render(<Banner />);
  });
});
