import {
  shouldForwardProp,
  styled,
  StyledSystemProps,
} from '@paisidevs/tra-theme';
import React, { FC, useState } from 'react';
import Measure from 'react-measure';
import { Box } from '../Box';

export interface IScrollViewProps extends StyledSystemProps {
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

const Wrapper = styled(Box, { shouldForwardProp })<IScrollViewProps>`
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  overflow-x: ${({ direction }) =>
    direction === 'vertical' ? 'hidden' : 'auto'};
  overflow-y: ${({ direction }) =>
    direction === 'vertical' ? 'auto' : 'hidden'};
`;

export const ScrollView: FC<IScrollViewProps> = ({ children, ...rest }) => {
  const [contentHeight, setContentHeight] = useState<number>(-1);
  const [wrapperHeight, setWrapperHeight] = useState<number>(-1);

  const isOverflowing = contentHeight > wrapperHeight;

  return (
    <Measure
      bounds
      onResize={(rect) => {
        setWrapperHeight(rect.bounds!.height);
      }}
    >
      {({ measureRef: wrapperRef }) => (
        <Wrapper
          {...rest}
          ref={wrapperRef}
          justifyContent={isOverflowing ? 'flex-start' : rest.justifyContent}
        >
          <Measure
            bounds
            onResize={(rect) => {
              setContentHeight(rect.bounds!.height);
            }}
          >
            {({ measureRef: contentRef }) => (
              <div ref={contentRef}>{children}</div>
            )}
          </Measure>
        </Wrapper>
      )}
    </Measure>
  );
};

ScrollView.defaultProps = {
  direction: 'vertical',
  height: '100%',
  width: '100%',
};
