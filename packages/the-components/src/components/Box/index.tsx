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
} from '@elandamor/tra-theme';
import { Flex, IFlexProps } from '../Flex';

export interface IBoxProps extends IFlexProps {
  aspect?: number;
  truncate?: boolean;
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

  ${({ aspect }) =>
    aspect &&
    css`
      content: '';
      display: block;
      height: 0;
      paddingbottom: ${(1 / aspect) * 100}%;
    `}

  ${({ truncate }) =>
    truncate &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}

  ${BoxStyles};
`;
