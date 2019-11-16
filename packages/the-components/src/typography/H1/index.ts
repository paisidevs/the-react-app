import { styled, StyledSystemProps, typography } from 'the-theme';

/**
 * @render react
 * @name H1 component
 * @description Heading level 1.
 * @example
 *  <H1>Heading</H1>
 */

const H1 = styled.h1<StyledSystemProps>`
  ${typography};
`;

H1.defaultProps = {
  color: 'text.default',
  fontSize: [8, 9],
};

export default H1;
