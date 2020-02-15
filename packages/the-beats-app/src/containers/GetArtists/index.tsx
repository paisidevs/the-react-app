import { Box, Flex, Loader, Text } from '@app/components';
import React, { FC } from 'react';
import { ArtistEdge, Maybe, useArtistsQuery } from '../../generated/graphql';

/**
 * @render react
 * @name GetArtists component
 * @description GetArtists component.
 * @example
 * <GetArtists />
 */

const GetArtists: FC<{}> = () => {
  const { data, error, loading } = useArtistsQuery();
  const artists = data?.artists?.edges || [];

  const renderArtists = (artists: Maybe<ArtistEdge>[]) => {
    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <Text>There was an error fetching your artists.</Text>;
    }

    if (!artists || artists.length < 1) {
      return <Text>Artists in your library will appear here.</Text>;
    }

    return artists.map((artist) => (
      <Flex key={artist?.node.id} alignItems="center">
        <Text mb="2">{artist?.node.name}</Text>
      </Flex>
    ));
  };

  return <Box>{renderArtists(artists)}</Box>;
};

export default GetArtists;
