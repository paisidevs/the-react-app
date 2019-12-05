import { Box } from '@app/components';
import { styled, useTheme } from '@app/theme';
import React from 'react';

const Wrapper = styled(Box)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.base};
  color: ${({ theme }) => theme.colors.text.default};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const App: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme();

  return <Wrapper onClick={() => setDarkMode(!darkMode)}>App</Wrapper>;
};

export default App;
