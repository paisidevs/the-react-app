import { Box } from '@elandamor/tra-components';
import { useTheme } from '@elandamor/tra-theme';
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
