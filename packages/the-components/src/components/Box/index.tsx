import {
  border,
  boxShadow,
  color,
  compose,
  css,
  position,
  shouldForwardProp,
  styled,
  typography,
} from '@app/theme';
import { Flex, IFlexProps } from '../Flex';

export interface IBoxProps extends IFlexProps {
  aspect?: number;
}

/**
 * @render react
 * @name Box component
 * @description Box component.
 * @example
 * <Box>
 *   <Flex />
 *   <Flex />
 * </Box>
 */

export const BoxStyles = compose(
  border,
  boxShadow,
  color,
  position,
  typography,
);

export const Box = styled(Flex, { shouldForwardProp })<IBoxProps>`
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;

  ${({ aspect }) =>
    aspect &&
    css`
      content: '';
      display: block;
      height: 0;
      padding-bottom: ${(1 / aspect) * 100}%;
    `}

  ${BoxStyles};
`;
