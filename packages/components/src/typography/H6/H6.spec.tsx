import { render } from '@testing-library/react';
import React from 'react';
import H6 from './index';

describe('H6', () => {
  it('renders without crashing', () => {
    const { container } = render(<H6>Heading</H6>);
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('h6');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correct text', () => {
    const { getByText } = render(<H6>Heading</H6>);
    expect(getByText('Heading')).toBeTruthy();
  });
});
