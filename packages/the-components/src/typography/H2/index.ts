import { space, styled, StyledSystemProps, typography } from '@app/theme';

/**
 * @render react
 * @name H2 component
 * @description Heading level 2.
 * @example
 *  <H2>Heading</H2>
 */

const H2 = styled.h2<StyledSystemProps>`
  ${space};
  ${typography};
`;

H2.defaultProps = {
  color: 'text.default',
  fontSize: [7, 8],
};

export default H2;
