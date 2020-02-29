import { Button, Routes, ScrollView } from '@elandamor/tra-components';
import { logger } from '@elandamor/tra-utilities';
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
          <Button
            text="Share"
            onClick={() => {
              // @ts-ignore
              if (navigator.share) {
                navigator
                  // @ts-ignore
                  .share({
                    title: 'web.dev',
                    text: 'Check out web.dev.',
                    url: 'https://web.dev/',
                  })
                  .then(() => console.log('Successful share'))
                  .catch((error: any) => console.log('Error sharing', error));
              } else {
                logger('Web Share API not supported.');
              }
            }}
          />
        </React.Fragment>
      );
    }

    return <Routes routes={routes} />;
  };

  return <ScrollView>{renderLibrary()}</ScrollView>;
};

export default Library;
