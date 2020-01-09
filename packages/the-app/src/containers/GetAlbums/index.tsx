import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { Box, Flex, Loader, Routes, Text } from '@app/components';
import React, { FC } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { GET_ALBUMS } from '../../graphql';

/**
 * @render react
 * @name GetAlbums component
 * @description GetAlbums component.
 * @example
 * <GetAlbums />
 */

const GetAlbums: FC<RouteComponentProps & { routes?: any[] }> = ({
  match,
  routes,
}) => {
  const client = useApolloClient();
  client.addResolvers({
    Query: {
      albums: (_: any, __: any, { cache }: any) => {
        const { albums } = cache.readQuery({ query: GET_ALBUMS });

        return albums;
      },
    },
  });

  const { data, error, loading } = useQuery(GET_ALBUMS);

  const albums = data?.albums?.edges || [];

  const renderAlbums = (albums: any[]) => {
    if (loading) {
      return <Loader />;
    }

    if (error) {
      console.error({ error });
      return <Text>There was an error fetching albums.</Text>;
    }

    if (!albums || albums.length < 1) {
      return <Text>Albums in your library will appear here.</Text>;
    }

    if (match.isExact) {
      return (
        <React.Fragment>
          <Box>
            {albums.map(({ node }: any) => (
              <Flex key={node.id} alignItems="center">
                <Link to={`/library/albums/${node.id}`}>
                  <Text mb="2">{node.name}</Text>
                </Link>
              </Flex>
            ))}
          </Box>
        </React.Fragment>
      );
    }

    return routes ? <Routes routes={routes} /> : null;
  };

  return <Box>{renderAlbums(albums)}</Box>;
};

export default GetAlbums;
