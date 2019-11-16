import {
  border,
  boxShadow,
  compose,
  position,
  styled,
  typography,
} from 'the-theme';
import Flex, { IFlexProps } from '../Flex';

export interface IBoxProps extends IFlexProps {}

/**
 * @render react
 * @name Box component
 * @description Box component.
 * @example
 * <Box />
 */

export const BoxStyles = compose(
  border,
  boxShadow,
  position,
  typography,
);

const Box = styled(Flex)<IBoxProps>`
  ${BoxStyles};

  box-sizing: border-box;
`;

Box.defaultProps = {
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
};

export default Box;
