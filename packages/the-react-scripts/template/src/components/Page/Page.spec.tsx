// Page.spec.tsx
import React from 'react';
import { render } from '@app/utils/test-utils';

import Page from './index';

describe('Page', () => {
  it('should render without crashing', () => {
    render(<Page>Page goes here...</Page>);
  });
});
