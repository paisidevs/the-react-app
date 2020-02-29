import React, { FC, useCallback, useEffect, useState } from 'react';
import { useAuthenticateUserMutation } from '../generated/graphql';
import { useLocalStorage } from '../hooks';

type CognitoUser = {
  id: string;
  accessToken: string;
  attributes: {
    avatar?: string | null;
    email: string;
    name?: string | null;
    role: 'admin' | 'subscriber';
    username?: string | null;
  };
};

const MOCK_COGNITO_USER: CognitoUser = {
  id: 'abcd1234',
  accessToken: 'abcd1234-ef56',
  attributes: {
    email: 'mpofuthandolwethu@gmail.com',
    name: 'Thandolwethu Mpofu',
    username: 'elandamor',
    role: 'admin' as 'admin',
  },
};

const Errors = {
  accountExists: {
    message: 'An account with this email already exists',
  },
};

const DEFAULT_STATE = {
  Errors,
  authenticating: true,
  cognitoUser: {} as CognitoUser,
  isAuthenticated: false,
  currentAuthenticatedUser: () => {},
  signIn: (_email: string, _password: string) => {},
  signUp: (_email: string, _password: string) => {},
};

export const AuthenticationContext = React.createContext(DEFAULT_STATE);

const Provider: FC<{}> = ({ children }) => {
  const [authenticating, setAuthenticating] = useState(
    DEFAULT_STATE.authenticating,
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    DEFAULT_STATE.isAuthenticated,
  );
  const [cognitoUser, setCognitoUser] = useLocalStorage('cognitoUser');

  const [authenticateUser] = useAuthenticateUserMutation();

  const currentAuthenticatedUser = useCallback(
    (): Promise<CognitoUser> =>
      new Promise((resolve, reject) => {
        try {
          resolve(cognitoUser);
          setAuthenticating(false);
        } catch (error) {
          setAuthenticating(false);
          reject(error);
        }
      }),
    [cognitoUser],
  );

  const signUp = (email: string): Promise<CognitoUser> =>
    new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          if (email.match('mpofuthandolwethu@gmail.com')) {
            reject(new Error(Errors.accountExists.message));
          }

          resolve(MOCK_COGNITO_USER);
        }, 3000);
      } catch (error) {
        reject(error);
      }
    });

  const signIn = (email: string, password: string): Promise<CognitoUser> =>
    new Promise(async (resolve, reject) => {
      setAuthenticating(true);
      try {
        const { data } = await authenticateUser({
          variables: {
            input: {
              email,
              password,
            },
          },
        });

        if (data?.authenticateUser) {
          const { token, user } = data.authenticateUser;

          const cognitoUser: CognitoUser = {
            id: user.id,
            accessToken: token,
            attributes: {
              email: user.email,
              name: user.name,
              username: user.username,
              role: user.isAdmin ? 'admin' : 'subscriber',
            },
          };

          setCognitoUser(cognitoUser);
          resolve(cognitoUser);

          setTimeout(() => setIsAuthenticated(true), 1000);
        }
        setAuthenticating(false);
      } catch (error) {
        setAuthenticating(false);
        reject(error);
      }
    });

  useEffect(() => {
    currentAuthenticatedUser().then((user) => user && setIsAuthenticated(true));
  }, [currentAuthenticatedUser]);

  return (
    <AuthenticationContext.Provider
      value={{
        authenticating,
        cognitoUser,
        currentAuthenticatedUser,
        Errors,
        isAuthenticated,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default Provider;
