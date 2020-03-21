import { StyledSystemProps } from '@paisidevs/tra-theme';
import React from 'react';
import { Box } from '../Box';
import { Circular, Path, Wrapper } from './styles';

export type LoaderProps = StyledSystemProps & {
  diameter?: number;
};

export const Loader: React.FC<LoaderProps> = ({ color, diameter = 24 }) => {
  return (
    <Box
      alignItems="center"
      height="100%"
      justifyContent="center"
      position="absolute"
      width="100%"
    >
      <Wrapper>
        <Circular viewBox="25 25 50 50">
          <Path
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="4"
            strokeMiterlimit="10"
          />
        </Circular>
      </Wrapper>
    </Box>
  );
};
