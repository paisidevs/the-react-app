import { render } from '@testing-library/react';
import React from 'react';
import { Flex } from './index';

describe('Flex', () => {
  it('renders without crashing', () => {
    const { container } = render(<Flex />);
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('div');
    expect(container.children).toHaveLength(1);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle('display: flex');
  });
});
