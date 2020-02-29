import {
  Box,
  ErrorBoundary,
  Grid,
  Modal,
  Routes,
} from '@elandamor/tra-components';
import { Global, ThemeProvider } from '@elandamor/tra-theme';
import React, { FC } from 'react';
import { Breadcrumbs } from '../../contexts/BreadcrumbsProvider.context';
import { useAuthentication } from '../../hooks';
import Login from '../../pages/Authentication/Login';
import { Footer, Header } from './elements';
import { routes } from './routes';

const App: FC = () => {
  const { isAuthenticated } = useAuthentication();

  const renderApp = () => {
    if (!isAuthenticated) {
      return (
        <Modal
          closeOnDocumentClick={false}
          hideCloseButton={true}
          open={true}
          maxWidth="400px"
        >
          <Login />
        </Modal>
      );
    }

    return (
      <React.Fragment>
        <Header />
        <Box height="100%" overflow="hidden">
          <Breadcrumbs>
            <ErrorBoundary>
              <Routes routes={routes} />
            </ErrorBoundary>
          </Breadcrumbs>
        </Box>
        <Footer />
      </React.Fragment>
    );
  };

  return (
    <ThemeProvider>
      <Grid
        backgroundColor="background.base"
        color="text.default"
        gridTemplateRows={['auto 1fr auto', 'auto 1fr auto']}
        height="100%"
        overflow="hidden"
      >
        <Global />
        {renderApp()}
      </Grid>
    </ThemeProvider>
  );
};

export default App;
