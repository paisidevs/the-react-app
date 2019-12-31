import { Box, Flex, Loader, Text } from '@app/components';
import React, { FC } from 'react';

/**
 * @render react
 * @name GetSongs component
 * @description GetSongs component.
 * @example
 * <GetSongs />
 */

const GetSongs: FC<{}> = () => {
  const {
    data: getSongsData,
    error: getSongsError,
    loading: getSongsLoading,
  } = {
    data: {
      songs: {
        edges: [],
      },
    },
    error: false,
    loading: false,
  };

  const songs = getSongsData.songs && getSongsData.songs.edges;

  const renderSongs = (songs: any[]) => {
    if (getSongsLoading) {
      return <Loader />;
    }

    if (getSongsError) {
      return <Text>There was an error fetching songs.</Text>;
    }

    if (!songs || songs.length < 1) {
      return <Text>Songs in your library will appear here.</Text>;
    }

    return songs.map(({ node }: any) => (
      <Flex key={node.id} alignItems="center">
        <Text mb="2">{node.name}</Text>
      </Flex>
    ));
  };

  return <Box>{renderSongs(songs)}</Box>;
};

export default GetSongs;
