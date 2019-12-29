import { Navigation as ImpNavigation } from '@app/components';
import React from 'react';

export const Navigation: React.FC = () => {
  const BASE_URL = '/library';

  return (
    <ImpNavigation
      direction="vertical"
      links={[
        { label: 'Playlists', href: `${BASE_URL}/playlists` },
        { label: 'Artists', href: `${BASE_URL}/artists` },
        { label: 'Albums', href: `${BASE_URL}/albums` },
        { label: 'Songs', href: `${BASE_URL}/songs` },
      ]}
    />
  );
};
