import { Routes, ScrollView } from '@app/components';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Breadcrumbs } from '../../contexts/BreadcrumbsProvider.context';
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

  return (
    <ScrollView>
      <Breadcrumbs
        initialCrumbs={[{ id: 'library', label: 'Library' }]}
        blacklist={['Album']}
      >
        {renderLibrary()}
      </Breadcrumbs>
    </ScrollView>
  );
};

export default Library;
