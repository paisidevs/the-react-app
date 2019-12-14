import { StyledSystemProps } from '@app/theme';
import React from 'react';
import { Box } from '../Box';
import { Wrapper } from './styles';

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
        <svg className="circular" viewBox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="4"
            strokeMiterlimit="10"
          />
        </svg>
      </Wrapper>
    </Box>
  );
};
