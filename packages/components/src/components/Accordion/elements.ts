import { css, styled, theme } from '@paisidevs/tra-theme';
import { Box } from '../Box';

export const Wrapper = styled(Box)<{ isOpen: boolean }>`
  border-radius: 2px;

  header {
    align-items: center;
    color: ${({ theme }) => theme.colors.text.default};
    cursor: pointer;
    display: flex;
    flex: none;
    justify-content: space-between;
  }

  section {
    font-size: ${theme.fontSizes[0]};
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      header > .c-icon {
        transform: rotate(180deg);
        transform-origin: 50% 50%;
      }
    `}
`;
