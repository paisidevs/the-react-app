import { Box, Flex, Loader, Text } from '@elandamor/tra-components';
import React, { FC } from 'react';

/**
 * @render react
 * @name GetPlaylists component
 * @description GetPlaylists component.
 * @example
 * <GetPlaylists />
 */

const GetPlaylists: FC<{}> = () => {
  const {
    data: getPlaylistsData,
    error: getPlaylistsError,
    loading: getPlaylistsLoading,
  } = {
    data: {
      playlists: {
        edges: [],
      },
    },
    error: false,
    loading: false,
  };

  const playlists =
    getPlaylistsData.playlists && getPlaylistsData.playlists.edges;

  const renderPlaylists = (playlists: any[]) => {
    if (getPlaylistsLoading) {
      return <Loader />;
    }

    if (getPlaylistsError) {
      return <Text>There was an error fetching your playlists.</Text>;
    }

    if (!playlists || playlists.length < 1) {
      return <Text>You haven't created any playlists yet.</Text>;
    }

    return playlists.map(({ node }: any) => (
      <Flex key={node.id} alignItems="center">
        <Text mb="2">{node.name}</Text>
      </Flex>
    ));
  };

  return <Box>{renderPlaylists(playlists)}</Box>;
};

export default GetPlaylists;
