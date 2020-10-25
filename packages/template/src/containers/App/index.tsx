import { Box, CSSReset, Grid, ThemeProvider } from '@chakra-ui/core';
import { css, Global } from '@emotion/core';
import { ErrorBoundary, Routes } from '@paisidevs/tra-components';
import { theme } from '@paisidevs/tra-theme';
import React, { FC } from 'react';
import { routes } from '../../routes';

const App: FC = () => {
  const renderApp = () => {
    const isAuthenticated = true;

    return (
      <React.Fragment>
        <Box as="header" />
        <Box
          as="main"
          display="flex"
          flex={1}
          flexDirection="column"
          height="100%"
          overflow="hidden"
        >
          <ErrorBoundary>
            <Routes isAuthenticated={isAuthenticated} routes={routes} />
          </ErrorBoundary>
        </Box>
      </React.Fragment>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        backgroundColor="background.base"
        color="black"
        gridTemplateRows={['auto 1fr auto', 'auto 1fr auto']}
        height="100%"
        overflow="hidden"
      >
        <CSSReset />
        <Global
          styles={css`
            * {
              box-sizing: border-box;
            }

            html,
            body,
            #root {
              -moz-osx-font-smoothing: grayscale;
              -webkit-font-smoothing: antialiased;
              font-feature-settings: 'liga', 'kern' 1;
              font-kerning: normal;
              height: 100%;
              margin: 0;
              text-rendering: optimizeLegibility;
              width: 100%;
            }

            fieldset {
              border: none;
              margin: 0;
              padding: 0;

              &:disabled {
                opacity: 0.5;
                pointer-events: none;
              }
            }

            [href] {
              color: inherit;
              text-decoration: none;
            }
          `}
        />
        {renderApp()}
      </Grid>
    </ThemeProvider>
  );
};

export default App;
