import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { H3, Text } from '../../typography';
import { Box } from '../Box';
import { Collapse } from '../Collapse';
import { Flex } from '../Flex';
import { Image } from '../Image';

export default {
  title: 'Collapse',
  component: Collapse,
  decorators: [
    (storyFn) => (
      <Box margin={6} width={344}>
        {storyFn()}
      </Box>
    ),
  ],
};

const imageUrl = 'https://source.unsplash.com/640x360/?nature,water';
const imageProps = {
  aspect: 640 / 360,
  src: imageUrl,
};

export const Default = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <React.Fragment>
      <Box
        backgroundColor="background.surface"
        border={1}
        borderColor="border.default"
        borderRadius={4}
        color="text.default"
        marginBottom={1}
      >
        <Image {...imageProps} />
        <Box
          padding={2}
          justifyContent="center"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Flex alignItems="center">
            <Box marginRight={2}>
              <Image rounded aspect={1} size={48} src={imageUrl} />
            </Box>
            <Box flex={1}>
              <H3 fontSize={4} fontWeight={4} lineHeight={1.6} margin={0}>
                Card title
              </H3>
              <Text fontSize={2}>Secondary text</Text>
            </Box>
            <Flex alignItems="center" flex="none" size={30}>
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </Flex>
          </Flex>
        </Box>
        <Collapse animateOpacity={false} isOpen={isExpanded}>
          <Box borderTop={1} borderColor="border.default" padding={2}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              incidunt consequuntur tenetur error mollitia, laborum, voluptates
              delectus necessitatibus libero illo itaque expedita! Deserunt eos
              recusandae culpa nisi, quisquam nulla iste.
            </Text>
          </Box>
        </Collapse>
      </Box>
    </React.Fragment>
  );
};
