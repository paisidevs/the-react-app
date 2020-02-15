import { Box, Flex, Image, Text } from '@elandamor/tra-components';
import React, { FC } from 'react';
import { Wrapper } from './styles';

/**
 * @render react
 * @name Track component
 * @description Track component.
 * @example
 * <Track />
 */

export interface ITrackProps {
  [key: string]: any;
}

export const Track: FC<ITrackProps> = ({
  current,
  data,
  onSelect: handleClick,
  hideAlbumCover = false,
  hideDuration = false,
  hideTrackNumber = true,
  ...rest
}) => {
  return (
    <Wrapper paddingX={1} {...rest}>
      {data.trackNumber && !hideTrackNumber && (
        <Flex flex="none" justifyContent="center" minWidth="40px">
          <Text fontSize={2}>{!current && data.trackNumber}</Text>
        </Flex>
      )}
      {data.album && !hideAlbumCover && (
        <Box flex="none" size="40px" marginRight={1}>
          <Image aspect={1} src="../" />
        </Box>
      )}
      <Box truncate flex={1} onClick={handleClick}>
        <Text truncate color="text.default">
          {data.name}
          {data.featuring?.length > 0 && (
            <React.Fragment>
              {' (feat. '}
              {data.featuring
                .map((artist: IArtist) => artist.name)
                .reduce((prev: any, curr: any) => [prev, ', ', curr])}
              {')'}
            </React.Fragment>
          )}
        </Text>
        <Text truncate fontSize={2}>
          {data.artists
            .map((artist: IArtist) => artist.name)
            .reduce((prev: any, curr: any) => [prev, ', ', curr])}
        </Text>
      </Box>
    </Wrapper>
  );
};
