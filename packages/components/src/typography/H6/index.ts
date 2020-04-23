import {
  shouldForwardProp,
  space,
  styled,
  StyledSystemProps,
  typography,
} from '@paisidevs/tra-theme';

/**
 * @render react
 * @name H6 component
 * @description Heading level 6.
 * @example
 *  <H6>Heading</H6>
 */

const H6 = styled('h6', { shouldForwardProp })<StyledSystemProps>`
  ${space};
  ${typography};
`;

H6.defaultProps = {
  color: 'text.default',
  fontSize: [3, 4],
};

export default H6;