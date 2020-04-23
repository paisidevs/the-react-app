import {
  shouldForwardProp,
  space,
  styled,
  StyledSystemProps,
  typography,
} from '@paisidevs/tra-theme';

/**
 * @render react
 * @name H4 component
 * @description Heading level 4.
 * @example
 *  <H4>Heading</H4>
 */

const H4 = styled('h4', { shouldForwardProp })<StyledSystemProps>`
  ${space};
  ${typography};
`;

H4.defaultProps = {
  color: 'text.default',
  fontSize: [5, 6],
};

export default H4;
