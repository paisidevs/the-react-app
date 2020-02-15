import { Box, Loader, Text } from '@app/components';
import React, { FC } from 'react';
import { Track } from '../../components';
import { Maybe, TrackEdge, useTracksQuery } from '../../generated/graphql';

/**
 * @render react
 * @name GetTracks component
 * @description GetTracks component.
 * @example
 * <GetTracks />
 */

const GetTracks: FC<{}> = () => {
  const { data, error, loading } = useTracksQuery();
  const tracks = data?.tracks?.edges;

  const renderTracks = (tracks: Maybe<TrackEdge>[]) => {
    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <Text>There was an error fetching tracks.</Text>;
    }

    if (!tracks || tracks.length < 1) {
      return <Text>Songs in your library will appear here.</Text>;
    }

    return tracks.map((track) => (
      <Track key={track?.node.id} data={track?.node} />
    ));
  };

  return <Box>{renderTracks(tracks)}</Box>;
};

export default GetTracks;
