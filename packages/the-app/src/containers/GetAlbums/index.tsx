import { useQuery } from '@apollo/react-hooks';
import { Box, Flex, Loader, Routes, Text } from '@app/components';
import { styled } from '@app/theme';
import React, { FC, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { GET_ALBUMS } from '../../graphql';
import { useBreadcrumbs } from '../../hooks';

const Wrapper = styled(Box)``;

interface IGetAlbumsProps extends RouteComponentProps {
  routes?: any[];
  title: string;
}

/**
 * @render react
 * @name GetAlbums component
 * @description GetAlbums component.
 * @example
 * <GetAlbums />
 */

const GetAlbums: FC<IGetAlbumsProps> = ({ location, match, routes, title }) => {
  const { addCrumb, removeCrumb } = useBreadcrumbs();

  const {
    data: getAlbumsData,
    error: getAlbumsError,
    loading: getAlbumsLoading,
  } = useQuery(GET_ALBUMS);

  const albums = getAlbumsData?.albums?.edges || [];

  const renderAlbums = (albums: any[]) => {
    if (getAlbumsLoading) {
      return <Loader />;
    }

    if (getAlbumsError) {
      console.error({ getAlbumsError });
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

  useEffect(() => {
    addCrumb({ id: title.toLowerCase(), label: title });

    return () => removeCrumb({ id: title.toLowerCase(), label: title });
  }, []); // eslint-disable-line

  return (
    <Wrapper>
      <Box>{renderAlbums(albums)}</Box>
    </Wrapper>
  );
};

export default GetAlbums;
