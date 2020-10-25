import {
  AspectRatioBox,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  theme,
  useDisclosure,
} from '@chakra-ui/core';
import { GqlStateHandler, ScrollView } from '@paisidevs/tra-components';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { API_HOST } from '../../constants';

const Example: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <GqlStateHandler error={undefined} loading={false}>
      <Box alignItems="center" justifyContent="center">
        <Button
          onClick={() =>
            (window.location.href = `${API_HOST}/connect/facebook`)
          }
        >
          Continue with Facebook
        </Button>
        <Button
          onClick={() => (window.location.href = `${API_HOST}/connect/google`)}
        >
          Continue with Google
        </Button>
        <Button margin="0 auto" onClick={onOpen}>
          Open App Clip
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            height="100%"
            width="100%"
            shadow="none"
            background="transparent"
            pointerEvents="none"
            rounded="md"
          >
            <ScrollView justifyContent="flex-end">
              <AppClip imageSrc="https://images.pexels.com/photos/4932184/pexels-photo-4932184.jpeg?cs=srgb&dl=pexels-cole-keister-4932184.jpg&fm=jpg" />
            </ScrollView>
          </ModalContent>
        </Modal>
      </Box>
    </GqlStateHandler>
  );
};

export default Example;

const MotionBox = motion.custom(Box);

interface AppClipProps {
  imageSrc: string;
}

const AppClip: FC<AppClipProps> = ({ imageSrc }) => {
  const variants = {
    hide: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <MotionBox
      animate="show"
      backgroundColor="gray.100"
      boxShadow={theme.shadows.sm}
      exit="hide"
      initial="hide"
      margin={4}
      maxWidth="400px"
      overflow="hidden"
      pointerEvents="auto"
      position="relative"
      rounded={8}
      // @ts-ignore
      transition={{ duration: 0.3, ease: 'easeOut' }}
      variants={variants}
      zIndex={10}
    >
      <AspectRatioBox ratio={16 / 10}>
        <Image src={imageSrc} />
      </AspectRatioBox>
      <ModalCloseButton
        backgroundColor="white"
        rounded="full"
        size="sm"
        top="12px"
      />
      <Box backgroundColor="white" padding={4} width="100%">
        <Box>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex flexDirection="column" paddingRight={4}>
              <Heading as="h2" fontSize="xl">
                Spin
              </Heading>
              <Text fontSize="sm" marginTop={1}>
                Tap open to unlock this scooter and ride.
              </Text>
            </Flex>
            <Button
              fontSize="sm"
              minWidth={24}
              variantColor="blue"
              rounded={24}
            >
              Open
            </Button>
          </Flex>
          <Divider marginY={4} />
        </Box>
        <Flex alignItems="center">
          <Box
            backgroundColor="gray.200"
            marginRight={2}
            rounded={4}
            size="28px"
          />
          <Flex flexDirection="column">
            <Text
              color="gray.500"
              fontSize="10px"
              lineHeight={1}
              marginBottom={1}
            >
              Powered by
            </Text>
            <Text fontSize="14px" fontWeight={600} lineHeight={1}>
              Spin
            </Text>
          </Flex>
        </Flex>
      </Box>
    </MotionBox>
  );
};

AppClip.defaultProps = {
  imageSrc:
    'https://images.pexels.com/photos/4932184/pexels-photo-4932184.jpeg?cs=srgb&dl=pexels-cole-keister-4932184.jpg&fm=jpg',
};
