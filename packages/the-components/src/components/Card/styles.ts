import styled, { css } from 'styled-components';
import { theme } from 'the-theme';
import H6 from '../../typography/H6';
import { ICardProps } from './index';

export const Content = styled.div<ICardProps>`
  ${({ contentPadding }) =>
    contentPadding &&
    css`
      padding: ${contentPadding}px;
    `}
`;

export const Description = styled.p`
  font-size: ${theme.fontSizes[2]}px;
  color: ${({ theme }) =>
    theme.isDark
      ? theme.colors.opacity.whites[8]
      : theme.colors.opacity.blacks[8]};
  line-height: 1.5;
`;

export const Title = styled(H6)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.default};

  svg {
    margin-bottom: -6px;
    margin-right: 10px;
  }
`;
