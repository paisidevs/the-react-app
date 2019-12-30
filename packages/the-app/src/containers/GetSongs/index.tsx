import { Box, Flex, Loader, Text } from '@app/components';
import { styled } from '@app/theme';
import React, { FC, useEffect } from 'react';
import { useBreadcrumbs } from '../../hooks';

const Wrapper = styled(Box)``;

interface IGetSongsProps {}

/**
 * @render react
 * @name GetSongs component
 * @description GetSongs component.
 * @example
 * <GetSongs />
 */

const GetSongs: FC<{ title: string }> = ({ title }) => {
  const { addCrumb, removeCrumb } = useBreadcrumbs();

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

  useEffect(() => {
    addCrumb({ id: title.toLowerCase(), label: title });

    return () => removeCrumb({ id: title.toLowerCase(), label: title });
  }, []); // eslint-disable-line

  return (
    <Wrapper>
      <Box>{renderSongs(songs)}</Box>
    </Wrapper>
  );
};

export default GetSongs;
