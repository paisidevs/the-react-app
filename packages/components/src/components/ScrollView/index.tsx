import { Box, BoxProps } from '@chakra-ui/core';
import { useMeasure } from '@paisidevs/tra-hooks';
import { styled } from '@paisidevs/tra-theme';
import React, { FC, useRef } from 'react';

export interface IScrollViewProps extends BoxProps {
  direction?: 'horizontal' | 'vertical';
}

/**
 * @render react
 * @name ScrollView component
 * @description ScrollView component.
 * @example
 * <ScrollView>
 *   <H1 />
 *   <Image />
 *   <Text />
 * </ScrollView>
 */

const Wrapper = styled(Box)<IScrollViewProps>`
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  overscroll-behavior: contain;
  overflow-x: ${({ direction }) =>
    direction === 'vertical' ? 'hidden' : 'auto'};
  overflow-y: ${({ direction }) =>
    direction === 'vertical' ? 'auto' : 'hidden'};
`;

const ScrollView: FC<IScrollViewProps> = ({ children, ...rest }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { height: wrapperHeight } = useMeasure(wrapperRef);
  const { height: contentHeight } = useMeasure(contentRef);

  const hasContentOverflow = contentHeight > wrapperHeight;

  return (
    <Wrapper
      {...rest}
      ref={wrapperRef}
      justifyContent={hasContentOverflow ? 'flex-start' : rest.justifyContent}
    >
      <div ref={contentRef} style={{ width: '100%' }}>
        {children}
      </div>
    </Wrapper>
  );
};

ScrollView.defaultProps = {
  direction: 'vertical',
  height: '100%',
  width: '100%',
};

export default ScrollView;
