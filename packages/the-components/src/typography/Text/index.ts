import { styled, StyledSystemProps, typography } from 'the-theme';

/**
 * @render react
 * @name Text component
 * @description Paragraph (default)
 * @example
 *  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
 */

const Text = styled.p<StyledSystemProps>`
  ${typography};
`;

Text.defaultProps = {
  color: 'text.default',
};

export default Text;
