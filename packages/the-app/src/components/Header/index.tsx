import { Box } from '@app/components';
import { useTheme } from '@app/theme';
import React from 'react';

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <Box
      bg="background.surface"
      color="text.default"
      onClick={() => setDarkMode(!darkMode)}
    />
  );
};

export default Header;
