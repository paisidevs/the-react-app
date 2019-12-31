import { render } from '@testing-library/react';
import React from 'react';
import { Animated } from './index';

describe('Animated', () => {
  it('renders without crashing', () => {
    const { container } = render(<Animated />);
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('div');
    expect(container.children).toHaveLength(1);
    expect(container.firstChild).toMatchSnapshot();
  });
});
