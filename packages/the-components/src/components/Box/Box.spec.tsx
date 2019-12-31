import { render } from '@testing-library/react';
import React from 'react';
import { Box } from './index';

describe('Box', () => {
  it('renders without crashing', () => {
    const { container } = render(<Box />);
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('div');
    expect(container.children).toHaveLength(1);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle(`
      display: flex;
      flex-direction: column;
    `);
  });
});
