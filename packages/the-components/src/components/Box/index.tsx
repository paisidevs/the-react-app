import {
  border,
  boxShadow,
  color,
  compose,
  position,
  shouldForwardProp,
  styled,
  typography,
} from '@app/theme';
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

export const Box = styled(Flex, { shouldForwardProp })<IBoxProps>(
  {
    boxSizing: 'border-box',
    flexDirection: 'column',
  },
  (props) =>
    props.aspect && {
      content: "''",
      display: 'block',
      height: 0,
      paddingBottom: `${(1 / props.aspect) * 100}%`,
    },
  (props) =>
    props.truncate && {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  border,
  boxShadow,
  color,
  position,
  typography,
);
