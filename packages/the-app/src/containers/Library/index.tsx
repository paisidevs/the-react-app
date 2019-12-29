import { H2, Routes, ScrollView } from '@app/components';
import React from 'react';
import { ChevronLeft } from 'react-feather';
import { RouteComponentProps } from 'react-router-dom';
import { Navigation, RecentlyAdded } from './elements';

const Library: React.FC<RouteComponentProps & { routes?: any[] }> = ({
  history,
  location,
  match,
  routes,
}) => {
  const renderLibrary = () => {
    if (match.isExact) {
      return (
        <React.Fragment>
          <Navigation />
          <RecentlyAdded />
        </React.Fragment>
      );
    }

    return routes ? <Routes location={location} routes={routes} /> : null;
  };

  return (
    <ScrollView>
      <H2
        data-testid="page-title"
        {...(!match.isExact && {
          fontSize: 2,
          onClick: () => history.goBack(),
        })}
      >
        {!match.isExact && <ChevronLeft />}
        Library
      </H2>
      {renderLibrary()}
    </ScrollView>
  );
};

export default Library;
