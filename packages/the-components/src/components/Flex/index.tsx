import {
  compose,
  flexbox,
  layout,
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

export const FlexStyles = compose(layout, flexbox);

export const Flex = styled.div<IFlexProps>`
  ${FlexStyles};
`;

Flex.defaultProps = {
  display: 'flex',
  flex: 1,
};
