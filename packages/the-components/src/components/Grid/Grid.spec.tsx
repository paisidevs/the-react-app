import { render } from '@testing-library/react';
import React from 'react';
import { Grid } from './index';

describe('Grid', () => {
  it('renders without crashing', () => {
    const { container } = render(<Grid />);
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('div');
    expect(container.children).toHaveLength(1);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle('display: grid');
  });
});
