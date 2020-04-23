import { render } from '@testing-library/react';
import React from 'react';
import Text from './index';

describe('Text', () => {
  it('renders without crashing', () => {
    const { container } = render(<Text>Heading</Text>);
    expect(container.firstChild?.nodeName.toLowerCase()).toBe('span');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correct text', () => {
    const { getByText } = render(<Text>Heading</Text>);
    expect(getByText('Heading')).toBeTruthy();
  });
});
