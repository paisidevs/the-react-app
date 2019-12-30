import {
  shouldForwardProp,
  space,
  styled,
  StyledSystemProps,
  typography,
} from '@app/theme';

/**
 * @render react
 * @name H3 component
 * @description Heading level 3.
 * @example
 *  <H3>Heading</H3>
 */

const H3 = styled('h3', { shouldForwardProp })<StyledSystemProps>`
  ${space};
  ${typography};
`;

H3.defaultProps = {
  color: 'text.default',
  fontSize: [6, 7],
};

export default H3;
