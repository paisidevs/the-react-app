import { Box } from '@app/components';
import { useTheme } from '@app/theme';
import React from 'react';

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <Box
      backgroundColor="background.surface"
      onClick={() => setDarkMode(!darkMode)}
    />
  );
};

export default Header;
