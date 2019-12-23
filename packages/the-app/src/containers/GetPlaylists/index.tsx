import { Box, Flex, H3, Loader, Text } from '@app/components';
import { styled } from '@app/theme';
import React, { FC } from 'react';

const Wrapper = styled(Box)``;

interface IGetPlaylistsProps {}

/**
 * @render react
 * @name GetPlaylists component
 * @description GetPlaylists component.
 * @example
 * <GetPlaylists />
 */

const GetPlaylists: FC<IGetPlaylistsProps> = () => {
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

  return (
    <Wrapper>
      <H3 data-testid="page-subtitle">Playlists</H3>
      <Box>{renderPlaylists(playlists)}</Box>
    </Wrapper>
  );
};

export default GetPlaylists;
