import {
  Box,
  Button,
  Flex,
  Loader,
  Modal,
  Routes,
  Text,
} from '@elandamor/tra-components';
import React, { FC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Album } from '../../components';
import { useAlbumsQuery } from '../../generated/graphql';
import { useAuthentication } from '../../hooks';
import AddAlbum from '../AddAlbum';

/**
 * @render react
 * @name GetAlbums component
 * @description GetAlbums component.
 * @example
 * <GetAlbums />
 */

const GetAlbums: FC<{ routes?: any[] }> = ({ routes }) => {
  const { cognitoUser } = useAuthentication();
  const match = useRouteMatch();

  const { data, error, loading } = useAlbumsQuery();

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
          {cognitoUser.attributes.role === 'admin' && (
            <Modal
              transition="slideFromRight"
              fullscreen
              trigger={
                <Box padding={2}>
                  <Button variant="outlined" text="Add new album" />
                </Box>
              }
            >
              <AddAlbum />
            </Modal>
          )}
          <Box>
            {albums.map(({ node }: any) => (
              <Flex key={node.id} alignItems="center">
                <Link to={`/library/albums/${node.id}`}>
                  <Album data={node} mb="2" />
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
