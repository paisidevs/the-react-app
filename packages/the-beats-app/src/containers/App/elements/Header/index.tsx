import {
  Box,
  Flex,
  Image,
  Text,
  useHasImageLoaded,
} from '@elandamor/tra-components';
import { styled, useTheme } from '@elandamor/tra-theme';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../../../../hooks';

const getInitials = (name: string) => {
  let [firstName, lastName] = name.split(' ');

  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  } else {
    return firstName.charAt(0);
  }
};

const AvatarWrapper = styled(Box)`
  background-color: ${(props) => props.theme.colors.background.base};
  border-radius: 100%;
  color: ${(props) => props.theme.colors.text.default};
  overflow: hidden;
`;

const Avatar: FC<any> = ({ name, size, src }) => {
  const hasLoaded = useHasImageLoaded({ src });

  const renderChildren = () => {
    if (src && hasLoaded) {
      return <Image aspect={1} size={size} src={src} />;
    }

    if (name) {
      return (
        <Box alignItems="center" justifyContent="center" size={size}>
          <Text fontSize={3} opacity={0.6}>
            {getInitials(name).toUpperCase()}
          </Text>
        </Box>
      );
    }

    return null;
  };

  return <AvatarWrapper size={size}>{renderChildren()}</AvatarWrapper>;
};

const Header = () => {
  const { cognitoUser } = useAuthentication();
  const { darkMode, setDarkMode } = useTheme();

  return (
    <Box
      backgroundColor="background.surface"
      justifyContent="center"
      minHeight="64px"
    >
      <Flex>
        <Flex flex={1} onClick={() => setDarkMode(!darkMode)} />
        <Flex flex="none" justifyContent="center" width="64px">
          <Link to="/profile">
            <Avatar
              name={
                cognitoUser.attributes.name || cognitoUser.attributes.username
              }
              size="40px"
              src={cognitoUser.attributes.avatar}
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
