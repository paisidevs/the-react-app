import { Box } from '@app/components';
import { styled } from '@app/theme';

export const Wrapper = styled(Box)`
  align-items: center;
  flex-direction: row;
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
