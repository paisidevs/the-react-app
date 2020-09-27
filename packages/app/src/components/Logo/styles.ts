import { Box } from '@chakra-ui/core';
import { keyframes, styled } from '@paisidevs/tra-theme';

const spin = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const Outer = styled(Box)`
  animation: ${spin} 10s linear infinite;
  display: flex;

  .a-oval {
    &:first-of-type {
      transform: rotate(-120deg);
    }
    &:last-of-type {
      transform: rotate(120deg);
    }
  }
`;
