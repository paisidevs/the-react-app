import {
  compose,
  flexbox,
  layout,
  shouldForwardProp,
  space,
  styled,
  StyledSystemProps,
} from '@app/theme';

export interface IFlexProps extends StyledSystemProps {}

/**
 * @render react
 * @name Flex component
 * @description Flex component.
 * @example
 *  <Flex>
 *    <Component />
 *  </Flex>
 */

export const FlexStyles = compose(flexbox, layout, space);

export const Flex = styled('div', { shouldForwardProp })<IFlexProps>`
  display: flex;
  position: relative;

  ${FlexStyles};
`;
