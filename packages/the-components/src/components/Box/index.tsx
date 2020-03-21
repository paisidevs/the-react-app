import {
  border,
  boxShadow,
  color,
  compose,
  css,
  flexbox,
  layout,
  position,
  shouldForwardProp,
  space,
  styled,
  StyledSystemProps,
  typography,
} from '@paisidevs/tra-theme';

export interface IBoxProps extends StyledSystemProps {
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
  flexbox,
  layout,
  position,
  space,
  typography,
);

export const Box = styled('div', { shouldForwardProp })<IBoxProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;

  ${({ aspect }) =>
    aspect &&
    css`
      content: '';
      display: block;
      height: 0;
      padding-bottom: ${(1 / aspect) * 100}%;
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
