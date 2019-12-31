import { useQuery } from '@apollo/react-hooks';
import { Box, Flex, H3, Loader, Text } from '@app/components';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { GET_ALBUM } from '../../graphql';

/**
 * @render react
 * @name GetAlbum component
 * @description GetAlbum component.
 * @example
 * <GetAlbum />
 */

const GetAlbum: FC<RouteComponentProps<{ id?: string }> & {
  routes?: any[];
}> = ({ match }) => {
  const {
    data: getAlbumData,
    error: getAlbumError,
    loading: getAlbumLoading,
  } = useQuery(GET_ALBUM, {
    variables: { id: match.params.id },
  });

  const album = getAlbumData?.album;

  const renderAlbum = (album: any) => {
    if (getAlbumLoading) {
      return <Loader />;
    }

    if (getAlbumError) {
      console.error({ getAlbumError });
      return <Text>There was an error fetching album.</Text>;
    }

    return (
      <Flex key={album.id} alignItems="center">
        <H3 data-testid="album-name" marginTop={0}>
          {album.name}
        </H3>
      </Flex>
    );
  };

  return <Box>{renderAlbum(album)}</Box>;
};

export default GetAlbum;
