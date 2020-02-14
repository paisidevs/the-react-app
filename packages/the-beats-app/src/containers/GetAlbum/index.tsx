import { useQuery } from '@apollo/react-hooks';
import { Box, H3, Loader, Text } from '@app/components';
import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Track from '../../components/Track';
import { GET_ALBUM } from '../../graphql';

/**
 * @render react
 * @name GetAlbum component
 * @description GetAlbum component.
 * @example
 * <GetAlbum />
 */

const GetAlbum: FC<{
  routes?: any[];
}> = () => {
  const match = useRouteMatch<{ id?: string }>();

  const { data, error, loading } = useQuery(GET_ALBUM, {
    variables: { id: match.params.id },
  });

  const album = data?.album;

  const renderAlbum = (album: IAlbum) => {
    if (loading) {
      return <Loader />;
    }

    if (error) {
      console.error({ error });
      return <Text>There was an error fetching album.</Text>;
    }

    return (
      <React.Fragment>
        <H3 data-testid="album-name" marginTop={0}>
          {album.name}
        </H3>
        {album.tracks.map((track: ITrack) => (
          <Track key={track.id} data={track} />
        ))}
      </React.Fragment>
    );
  };

  return <Box>{renderAlbum(album)}</Box>;
};

export default GetAlbum;
