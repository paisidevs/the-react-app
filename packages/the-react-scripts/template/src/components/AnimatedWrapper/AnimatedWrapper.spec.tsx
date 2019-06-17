// AnimatedWrapper.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import AnimatedWrapper from './index';

describe('AnimatedWrapper', () => {
  it('should render without crashing', () => {
    render(<AnimatedWrapper />);
  });
});
