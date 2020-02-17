import { StyledSystemProps } from '@elandamor/tra-theme';
import React, { FC } from 'react';
import AnimateHeight, * as RAH from 'react-animate-height';
import { Box } from '../Box';

type AnimateHeightProps = Pick<
  RAH.AnimateHeightProps,
  | 'animationStateClasses'
  | 'applyInlineTransitions'
  | 'delay'
  | 'easing'
  | 'style'
  | 'children'
>;

interface ICollapseProps extends StyledSystemProps {
  /**
   * If `true`, the content will be visible
   */
  isOpen?: boolean;
  /**
   * If `true`, the opacity of the content will be animated
   */
  animateOpacity?: boolean;
  /**
   * The duration of the animation in `ms`
   */
  duration?: number;
  /**
   * The height you want the content in it's collapsed state. Set to `0` by default
   */
  startingHeight?: number | string;
  /**
   * The height you want the content in it's expanded state. Set to `auto` by default
   */
  endingHeight?: number | string;
  /**
   * The function to be called when the collapse animation starts. It provides the `newHeight` as an argument
   */
  onAnimationEnd?(props: { newHeight: number }): void;
  /**
   * The function to be called when the collapse animation ends. It provides the `newHeight` as an argument
   */
  onAnimationStart?(props: { newHeight: number }): void;
}

export const Collapse: FC<ICollapseProps & AnimateHeightProps> = ({
  isOpen,
  animateOpacity = true,
  onAnimationStart,
  onAnimationEnd,
  duration,
  easing = 'ease',
  startingHeight = 0,
  endingHeight = 'auto',
  ...rest
}) => {
  return (
    <AnimateHeight
      duration={duration}
      easing={easing}
      animateOpacity={animateOpacity}
      height={isOpen ? endingHeight : startingHeight}
      applyInlineTransitions={false}
      css={{
        transition:
          'height .2s ease,opacity .2s ease-in-out,transform .2s ease-in-out',
        '&.rah-animating--to-height-zero': {
          opacity: 0,
          transform: 'translateY(-0.625rem)',
        },
      }}
      {...{ onAnimationStart, onAnimationEnd }}
    >
      <Box {...rest} />
    </AnimateHeight>
  );
};
