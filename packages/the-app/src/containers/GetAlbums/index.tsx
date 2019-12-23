import { Box, Flex, H3, Loader, Text } from '@app/components';
import { styled } from '@app/theme';
import React, { FC } from 'react';

const Wrapper = styled(Box)``;

interface IGetAlbumsProps {}

/**
 * @render react
 * @name GetAlbums component
 * @description GetAlbums component.
 * @example
 * <GetAlbums />
 */

const GetAlbums: FC<IGetAlbumsProps> = () => {
  const {
    data: getAlbumsData,
    error: getAlbumsError,
    loading: getAlbumsLoading,
  } = {
    data: {
      albums: {
        edges: [],
      },
    },
    error: false,
    loading: false,
  };

  const albums = getAlbumsData.albums && getAlbumsData.albums.edges;

  const renderAlbums = (albums: any[]) => {
    if (getAlbumsLoading) {
      return <Loader />;
    }

    if (getAlbumsError) {
      return <Text>There was an error fetching albums.</Text>;
    }

    if (!albums || albums.length < 1) {
      return <Text>Albums in your library will appear here.</Text>;
    }

    return albums.map(({ node }: any) => (
      <Flex key={node.id} alignItems="center">
        <Text mb="2">{node.name}</Text>
      </Flex>
    ));
  };

  return (
    <Wrapper>
      <H3>Albums</H3>
      <Box>{renderAlbums(albums)}</Box>
    </Wrapper>
  );
};

export default GetAlbums;
