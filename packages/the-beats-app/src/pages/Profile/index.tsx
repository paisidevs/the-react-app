import { Button, Form, Input, ScrollView } from '@elandamor/tra-components';
import { logger } from '@elandamor/tra-utilities';
import React, { FC } from 'react';
import { useUpdateUserMutation, useUserQuery } from '../../generated/graphql';
import { useAuthentication } from '../../hooks';

const INITIAL_VALUES = {
  name: '',
  username: '',
};

/**
 * @render react
 * @name Profile page
 * @description Profile page.
 * @example
 * <Profile />
 */

const Profile: FC = () => {
  const { cognitoUser } = useAuthentication();
  const { data } = useUserQuery({ variables: { id: cognitoUser.id } });
  const [updateUser] = useUpdateUserMutation();

  const userDetails = data?.user
    ? {
        name: data.user.name || '',
        username: data.user.username || '',
      }
    : {};

  const initialValues = {
    ...INITIAL_VALUES,
    ...userDetails,
  };

  return (
    <ScrollView padding={2}>
      <Form
        enableReinitialize
        name="profile"
        onSubmit={async ({ name, username }) => {
          try {
            await updateUser({
              variables: {
                input: {
                  name,
                  username,
                },
              },
            });
          } catch (error) {
            logger(error);
            return error;
          }
        }}
        initialValues={initialValues}
      >
        <Input label="Name" name="name" />
        <Input
          label="Username"
          name="username"
          startAdornment="@"
          inlineStartAdornment
        />
        <Button type="submit" variant="primary" text="Update" />
      </Form>
    </ScrollView>
  );
};

export default Profile;
