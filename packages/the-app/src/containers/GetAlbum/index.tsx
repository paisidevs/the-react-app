import { useQuery } from '@apollo/react-hooks';
import { Box, Flex, H3, Loader, Text } from '@app/components';
import { styled } from '@app/theme';
import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { GET_ALBUM } from '../../graphql';
import { useBreadcrumbs } from '../../hooks';

const Wrapper = styled(Box)``;

interface IGetAlbumProps extends RouteComponentProps<{ id?: string }> {
  title: string;
}

/**
 * @render react
 * @name GetAlbum component
 * @description GetAlbum component.
 * @example
 * <GetAlbum />
 */

const GetAlbum: FC<IGetAlbumProps> = ({ match, title }) => {
  const { addCrumb, removeCrumb } = useBreadcrumbs();

  const {
    data: getAlbumData,
    error: getAlbumError,
    loading: getAlbumLoading,
  } = useQuery(GET_ALBUM, {
    variables: { id: match.params.id },
  });

  const album = getAlbumData?.album;

  const renderAlbum = (album: any) => {
    if (getAlbumLoading) {
      return <Loader />;
    }

    if (getAlbumError) {
      console.error({ getAlbumError });
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

  useEffect(() => {
    addCrumb({ id: title.toLowerCase(), label: title });

    return () => removeCrumb({ id: title.toLowerCase(), label: title });
  }, []); // eslint-disable-line

  return (
    <Wrapper>
      <Box>{renderAlbum(album)}</Box>
    </Wrapper>
  );
};

export default GetAlbum;
