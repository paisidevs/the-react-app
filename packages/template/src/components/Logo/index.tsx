import { Box, theme } from '@chakra-ui/core';
import React, { FC } from 'react';
import { Outer } from './styles';

const Logo: FC<{ size?: number }> = ({ size = 128 }) => {
  const ovalProps = {
    border: `${size / 48}px solid ${theme.colors.gray[500]}`,
    borderRadius: '50%',
    className: 'a-oval',
    height: '80%',
    position: 'absolute' as 'absolute',
    width: '100%',
  };

  return (
    <Outer
      alignItems="center"
      justifyContent="center"
      margin="0 auto"
      size={size}
    >
      <Box {...ovalProps} />
      <Box {...ovalProps} />
      <Box {...ovalProps} />
    </Outer>
  );
};

export default Logo;
