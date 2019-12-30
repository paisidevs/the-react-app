import { render } from '@testing-library/react';
import React from 'react';
import H1 from './index';

describe('H1', () => {
  it('renders without crashing', () => {
    const { container } = render(<H1>Heading</H1>);
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('h1');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correct text', () => {
    const { getByText } = render(<H1>Heading</H1>);
    expect(getByText('Heading')).toBeTruthy();
  });
});
