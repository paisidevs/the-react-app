import { Global, ThemeProvider } from '@app/theme';
import React from 'react';
import { Header } from '../../components';
import { Wrapper } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Wrapper>
        <Global />
        <Header />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
