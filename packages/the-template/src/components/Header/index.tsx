import { Box } from '@app/components';
import { useTheme } from '@app/theme';
import React from 'react';

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <Box
      bg="background.surface"
      borderBottom="1"
      borderColor="border.default"
      color="text.default"
      height={['64px', '88px']}
      onClick={() => setDarkMode(!darkMode)}
    />
  );
};

export default Header;
