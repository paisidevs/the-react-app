import { render } from '@testing-library/react';
import React from 'react';
import { Box } from '../Box';
import { HorizontalScroller } from './index';

const setup = () => {
  return render(
    <HorizontalScroller>
      <Box>1</Box>
      <Box>2</Box>
    </HorizontalScroller>,
  );
};

describe('HorizontalScroller', () => {
  it('renders without crashing', () => {
    const { container } = setup();
    const wrapperNode = container.firstChild as HTMLDivElement;
    const trackNode = wrapperNode.firstChild as HTMLDivElement;

    expect(wrapperNode.children).toHaveLength(1);
    expect(trackNode.children).toHaveLength(2);

    expect(wrapperNode.nodeName.toLowerCase()).toBe('div');
    expect(wrapperNode).toHaveStyle('overflow: hidden');

    expect(trackNode.nodeName.toLowerCase()).toBe('div');
    expect(trackNode).toHaveStyle('display: grid');
  });
});
