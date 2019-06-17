// GoBackButton.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import GoBackButton from './index';

describe('GoBackButton', () => {
  it('should render without crashing', () => {
    render(<GoBackButton show={true} />);
  });
});
