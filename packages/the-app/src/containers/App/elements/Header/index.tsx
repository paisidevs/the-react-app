import { Box, Flex } from '@app/components';
import { useTheme } from '@app/theme';
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
