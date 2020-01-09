import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { Box, Flex, H3, Loader, Text } from '@app/components';
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { GET_ALBUM, GET_ALBUMS } from '../../graphql';

/**
 * @render react
 * @name GetAlbum component
 * @description GetAlbum component.
 * @example
 * <GetAlbum />
 */

const GetAlbum: FC<RouteComponentProps<{ id?: string }> & {
  routes?: any[];
}> = ({ match }) => {
  const client = useApolloClient();
  client.addResolvers({
    Query: {
      album: (_: any, { id }: any, { cache }: any) => {
        const { albums } = cache.readQuery({ query: GET_ALBUMS });
        return albums?.edges.find(({ node }: any) => node.id === id)?.node;
      },
    },
  });

  const { data, error, loading } = useQuery(GET_ALBUM, {
    variables: { id: match.params.id },
  });

  const album = data?.album;

  const renderAlbum = (album: any) => {
    if (loading) {
      return <Loader />;
    }

    if (error) {
      console.error({ error });
      return <Text>There was an error fetching album.</Text>;
    }

    return (
      <Flex key={album.id} alignItems="center">
        <H3 data-testid="album-name" marginTop={0}>
          {album.name}
        </H3>
      </Flex>
    );
  };

  return <Box>{renderAlbum(album)}</Box>;
};

export default GetAlbum;
