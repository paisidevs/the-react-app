import { render } from '@testing-library/react';
import React from 'react';
import H5 from './index';

describe('H5', () => {
  it('renders without crashing', () => {
    const { container } = render(<H5>Heading</H5>);
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('h5');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correct text', () => {
    const { getByText } = render(<H5>Heading</H5>);
    expect(getByText('Heading')).toBeTruthy();
  });
});
