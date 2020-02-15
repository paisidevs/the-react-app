import {
  shouldForwardProp,
  space,
  styled,
  StyledSystemProps,
  typography,
} from '@elandamor/tra-theme';

/**
 * @render react
 * @name H1 component
 * @description Heading level 1.
 * @example
 *  <H1>Heading</H1>
 */

const H1 = styled('h1', { shouldForwardProp })<StyledSystemProps>`
  ${space};
  ${typography};
`;

H1.defaultProps = {
  color: 'text.default',
  fontSize: [8, 9],
};

export default H1;
