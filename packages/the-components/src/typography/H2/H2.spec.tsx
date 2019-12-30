import { render } from '@testing-library/react';
import React from 'react';
import H2 from './index';

describe('H2', () => {
  it('renders without crashing', () => {
    const { container } = render(<H2>Heading</H2>);
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('h2');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correct text', () => {
    const { getByText } = render(<H2>Heading</H2>);
    expect(getByText('Heading')).toBeTruthy();
  });
});
