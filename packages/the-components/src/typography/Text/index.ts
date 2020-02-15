import {
  color,
  layout,
  shouldForwardProp,
  space,
  styled,
  StyledSystemProps,
  typography,
} from '@elandamor/tra-theme';

/**
 * @render react
 * @name Text component
 * @description Span (default)
 * @example
 *  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
 */

const Text = styled('span', { shouldForwardProp })<
  StyledSystemProps & { truncate?: boolean }
>(
  {
    color: 'inherit',
    lineHeight: 1.5,
  },
  (props) =>
    props.truncate && {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  color,
  layout,
  space,
  typography,
);

export default Text;
