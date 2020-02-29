import { Box } from '@elandamor/tra-components';
import { styled } from '@elandamor/tra-theme';

export const Details = styled(Box)`
  min-width: 0;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
