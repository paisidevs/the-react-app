import { Flex } from '@app/components';
import { styled } from '@app/theme';

export const Wrapper = styled(Flex)`
  align-items: center;
  color: ${({ theme }) =>
    theme.isDark
      ? theme.colors.opacity.whites[8]
      : theme.colors.opacity.blacks[8]};
  min-height: 56px;
`;
