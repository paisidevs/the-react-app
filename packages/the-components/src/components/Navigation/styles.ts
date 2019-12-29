import { styled } from '@app/theme';

export const Wrapper = styled.nav`
  color: currentColor;

  a {
    position: relative;
    width: 100%;

    &.-active {
      &::after {
        content: '';
        left: 0;
        position: absolute;
      }

      &::after {
        background-color: ${({ theme }) =>
          theme.isDark
            ? theme.colors.opacity.whites[4]
            : theme.colors.opacity.blacks[4]};
        bottom: 0;
        height: 8px;
        margin: 0 auto;
        right: 0;
        width: 80%;
      }
    }
  }
`;
