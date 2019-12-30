import { Box, Flex, Loader, Text } from '@app/components';
import { styled } from '@app/theme';
import React, { FC, useEffect } from 'react';
import { useBreadcrumbs } from '../../hooks';

const Wrapper = styled(Box)``;

/**
 * @render react
 * @name GetArtists component
 * @description GetArtists component.
 * @example
 * <GetArtists />
 */

const GetArtists: FC<{ title: string }> = ({ title }) => {
  const { addCrumb, removeCrumb } = useBreadcrumbs();

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

  useEffect(() => {
    addCrumb({ id: title.toLowerCase(), label: title });

    return () => removeCrumb({ id: title.toLowerCase(), label: title });
  }, []); // eslint-disable-line

  return (
    <Wrapper>
      <Box>{renderArtists(artists)}</Box>
    </Wrapper>
  );
};

export default GetArtists;
