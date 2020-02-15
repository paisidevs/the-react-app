import { Box, Flex } from '@elandamor/tra-components';
import { useTheme } from '@elandamor/tra-theme';
import React from 'react';

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <Box
      alignItems="center"
      backgroundColor="background.surface"
      flexDirection="row"
      minHeight="64px"
      onClick={() => setDarkMode(!darkMode)}
    >
      <Flex justifyContent="flex-end" />
    </Box>
  );
};

export default Header;
