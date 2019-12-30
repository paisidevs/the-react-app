import { render } from '@testing-library/react';
import React from 'react';
import H3 from './index';

describe('H3', () => {
  it('renders without crashing', () => {
    const { container } = render(<H3>Heading</H3>);
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('h3');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correct text', () => {
    const { getByText } = render(<H3>Heading</H3>);
    expect(getByText('Heading')).toBeTruthy();
  });
});
