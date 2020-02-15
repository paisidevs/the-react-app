import { Routes, ScrollView } from '@elandamor/tra-components';
import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Navigation, RecentlyAdded } from './elements';
import { routes } from './routes';

const Library: FC<{ routes?: any[] }> = () => {
  const match = useRouteMatch();

  const renderLibrary = () => {
    if (match.isExact) {
      return (
        <React.Fragment>
          <Navigation />
          <RecentlyAdded />
        </React.Fragment>
      );
    }

    return <Routes routes={routes} />;
  };

  return <ScrollView>{renderLibrary()}</ScrollView>;
};

export default Library;
