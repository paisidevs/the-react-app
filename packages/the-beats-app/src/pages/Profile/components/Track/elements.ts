import { Box } from '@elandamor/tra-components';
import { styled } from '@elandamor/tra-theme';

export const Wrapper = styled(Box)`
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const Details = styled(Box)`
  span:first-child {
    display: block;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
