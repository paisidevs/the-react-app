import { Box, Flex, H3, Loader, Text } from '@app/components';
import { styled } from '@app/theme';
import React, { FC } from 'react';

const Wrapper = styled(Box)``;

interface IGetArtistsProps {}

/**
 * @render react
 * @name GetArtists component
 * @description GetArtists component.
 * @example
 * <GetArtists />
 */

const GetArtists: FC<IGetArtistsProps> = () => {
  const {
    data: getArtistsData,
    error: getArtistsError,
    loading: getArtistsLoading,
  } = {
    data: {
      artists: {
        edges: [],
      },
    },
    error: false,
    loading: false,
  };

  const artists = getArtistsData.artists && getArtistsData.artists.edges;

  const renderArtists = (artists: any[]) => {
    if (getArtistsLoading) {
      return <Loader />;
    }

    if (getArtistsError) {
      return <Text>There was an error fetching your artists.</Text>;
    }

    if (!artists || artists.length < 1) {
      return <Text>Artists in your library will appear here.</Text>;
    }

    return artists.map(({ node }: any) => (
      <Flex key={node.id} alignItems="center">
        <Text mb="2">{node.name}</Text>
      </Flex>
    ));
  };

  return (
    <Wrapper>
      <H3 data-testid="page-subtitle">Artists</H3>
      <Box>{renderArtists(artists)}</Box>
    </Wrapper>
  );
};

export default GetArtists;
