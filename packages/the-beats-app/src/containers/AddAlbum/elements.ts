import { Box } from '@app/components';
import { styled } from '@app/theme';

export const Details = styled(Box)`
  min-width: 0;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
