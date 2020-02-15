import { Box, Flex, H6 } from '@elandamor/tra-components';
import { StyledSystemProps } from '@elandamor/tra-theme';
import React, { FC } from 'react';

interface IAlbumProps extends StyledSystemProps {
  data: IAlbum;
}

/**
 * @render react
 * @name Album component
 * @description Album component.
 * @example
 * <Album data={album} />
 */

export const Album: FC<IAlbumProps> = ({ data: album, ...rest }) => {
  return (
    <Box {...rest}>
      <Flex alignItems="center">
        <Flex flex="1" px="2" py="1">
          <H6 m="0">{album.name}</H6>
        </Flex>
      </Flex>
    </Box>
  );
};

Album.defaultProps = {
  alignItems: 'center',
};
