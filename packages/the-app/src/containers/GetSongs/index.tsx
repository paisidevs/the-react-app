import { Box, Flex, H3, Loader, Text } from '@app/components';
import { styled } from '@app/theme';
import React, { FC } from 'react';

const Wrapper = styled(Box)``;

interface IGetSongsProps {}

/**
 * @render react
 * @name GetSongs component
 * @description GetSongs component.
 * @example
 * <GetSongs />
 */

const GetSongs: FC<IGetSongsProps> = () => {
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

  return (
    <Wrapper>
      <H3 data-testid="page-subtitle">Songs</H3>
      <Box>{renderSongs(songs)}</Box>
    </Wrapper>
  );
};

export default GetSongs;
