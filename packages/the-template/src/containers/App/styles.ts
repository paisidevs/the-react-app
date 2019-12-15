import { Box } from '@app/components';
import { styled } from '@app/theme';

export const Wrapper = styled(Box)`
  background-color: ${({ theme }) => theme.colors.background.base};
  color: ${({ theme }) => theme.colors.text.default};
  height: 100%;
  overflow: hidden;
`;
