import { Box, Flex, Loader, Text } from '@app/components';
import { styled } from '@app/theme';
import React, { FC, useEffect } from 'react';
import { useBreadcrumbs } from '../../hooks';

const Wrapper = styled(Box)``;

/**
 * @render react
 * @name GetPlaylists component
 * @description GetPlaylists component.
 * @example
 * <GetPlaylists />
 */

const GetPlaylists: FC<{ title: string }> = ({ title }) => {
  const { addCrumb, removeCrumb } = useBreadcrumbs();

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

  useEffect(() => {
    addCrumb({ id: title.toLowerCase(), label: title });

    return () => removeCrumb({ id: title.toLowerCase(), label: title });
  }, []); // eslint-disable-line

  return (
    <Wrapper>
      <Box>{renderPlaylists(playlists)}</Box>
    </Wrapper>
  );
};

export default GetPlaylists;
