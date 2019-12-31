import { Routes, ScrollView } from '@app/components';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Navigation, RecentlyAdded } from './elements';
import { routes } from './routes';

const Library: FC<RouteComponentProps & { routes?: any[] }> = ({ match }) => {
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
