// Header.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Header from './index';

describe('Header', () => {
  it('should render without crashing', () => {
    render(<Header />);
  });
});
