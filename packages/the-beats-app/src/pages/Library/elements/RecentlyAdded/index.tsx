import { Box, Flex, H3, Loader, Text } from '@elandamor/tra-components';
import { styled } from '@elandamor/tra-theme';
import React, { FC } from 'react';

const Wrapper = styled(Box)``;

interface IGetRecentlyAddedProps {}

/**
 * @render react
 * @name GetRecentlyAdded component
 * @description GetRecentlyAdded component.
 * @example
 * <GetRecentlyAdded />
 */

const GetRecentlyAdded: FC<IGetRecentlyAddedProps> = () => {
  const {
    data: getRecentlyAddedData,
    error: getRecentlyAddedError,
    loading: getRecentlyAddedLoading,
  } = {
    data: {
      recentlyAdded: {
        edges: [],
      },
    },
    error: false,
    loading: false,
  };

  const recentlyAdded =
    getRecentlyAddedData.recentlyAdded &&
    getRecentlyAddedData.recentlyAdded.edges;

  const renderRecentlyAdded = (recentlyAdded: any[]) => {
    if (getRecentlyAddedLoading) {
      return <Loader />;
    }

    if (getRecentlyAddedError) {
      return <Text>There was an error fetching recently added albums.</Text>;
    }

    if (!recentlyAdded || recentlyAdded.length < 1) {
      return (
        <Text>Recently added albums in your library will appear here.</Text>
      );
    }

    return recentlyAdded.map(({ node }: any) => (
      <Flex key={node.id} alignItems="center">
        <Text mb="2">{node.name}</Text>
      </Flex>
    ));
  };

  return (
    <Wrapper>
      <H3>Recently Added</H3>
      <Box>{renderRecentlyAdded(recentlyAdded)}</Box>
    </Wrapper>
  );
};

export default GetRecentlyAdded;
