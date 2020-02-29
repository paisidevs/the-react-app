import { Box, Navigation } from '@elandamor/tra-components';
import React from 'react';

const Footer = () => {
  return (
    <Box
      backgroundColor="background.surface"
      justifyContent="center"
      minHeight="56px"
    >
      <Navigation
        direction="horizontal"
        links={[
          { exact: true, label: 'Home', href: '/' },
          { label: 'Discover', href: '/discover' },
          { label: 'For You', href: '/for-you' },
        ]}
      />
    </Box>
  );
};

export default Footer;
