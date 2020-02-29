import { Text } from '@elandamor/tra-components';
import React, { FC } from 'react';
import { Details, Wrapper } from './elements';

/**
 * @render react
 * @name Track component
 * @description Track component.
 * @example
 * <Track />
 */

export interface ITrackProps {
  data: {
    artists: string[];
    id: string;
    featuring?: string[];
    name: string;
    trackNumber: number;
  };
}

const Track: FC<ITrackProps> = ({ data }) => {
  return (
    <Wrapper>
      {data.trackNumber && (
        <Text opacity={0.6} minWidth="48px" paddingLeft={2}>
          {data.trackNumber}
        </Text>
      )}
      <Details>
        <Text>
          {data.name}
          {data.featuring && data.featuring.length > 0 && (
            <React.Fragment>
              {' (feat. '}
              {data.featuring.map((artist: string) => artist)}
              {')'}
            </React.Fragment>
          )}
        </Text>
        <Text fontSize={1} lineHeight="1" opacity={0.6}>
          {data.artists.map((artist: string) => artist)}
        </Text>
      </Details>
    </Wrapper>
  );
};

export default Track;
