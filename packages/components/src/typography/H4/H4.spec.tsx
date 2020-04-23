import { render } from '@testing-library/react';
import React from 'react';
import H4 from './index';

describe('H4', () => {
  it('renders without crashing', () => {
    const { container } = render(<H4>Heading</H4>);
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('h4');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correct text', () => {
    const { getByText } = render(<H4>Heading</H4>);
    expect(getByText('Heading')).toBeTruthy();
  });
});
