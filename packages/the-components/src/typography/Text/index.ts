import {
  color,
  layout,
  shouldForwardProp,
  space,
  styled,
  StyledSystemProps,
  typography,
} from '@app/theme';

/**
 * @render react
 * @name Text component
 * @description Span (default)
 * @example
 *  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
 */

const Text = styled('span', { shouldForwardProp })<StyledSystemProps>(
  {
    color: 'inherit',
    lineHeight: 1.5,
  },
  color,
  layout,
  space,
  typography,
);

export default Text;
