import { Box, Flex } from '@chakra-ui/core';
import { ScrollView } from '@paisidevs/tra-components';
import { theme } from '@paisidevs/tra-theme';
import React, { FC } from 'react';
import { AlertTriangle } from 'react-feather';

const NotFound: FC = () => {
  return (
    <ScrollView justifyContent="center">
      <Box textAlign="center" width="100%">
        <Flex
          alignItems="center"
          backgroundColor="red.100"
          justifyContent="center"
          margin="0 auto"
          rounded="full"
          size="40vw"
        >
          <AlertTriangle
            color={theme.colors.red[500]}
            size="50%"
            strokeWidth={1.5}
          />
        </Flex>
      </Box>
    </ScrollView>
  );
};

export default NotFound;
