import React, { FC, useState } from 'react';

type CognitoUser = {
  id: string;
  accessToken: string;
  attributes: {
    email: string;
    name: string;
    role: 'admin' | 'subscriber';
    username?: string;
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
  isAuthenticated: true,
  currentAuthenticatedUser: () => {},
  signIn: (_email: string, _password: string) => {},
  signUp: (_email: string, _password: string) => {},
};

export const AuthenticationContext = React.createContext(DEFAULT_STATE);

const Provider: FC<{}> = ({ children }) => {
  const [authenticating] = useState(DEFAULT_STATE.authenticating);
  const [isAuthenticated, setIsAuthenticated] = useState(
    DEFAULT_STATE.isAuthenticated,
  );

  const currentAuthenticatedUser = (): Promise<CognitoUser> =>
    new Promise((resolve, reject) => {
      try {
        resolve(MOCK_COGNITO_USER);
      } catch (error) {
        reject(error);
      }
    });

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

  const signIn = (): Promise<CognitoUser> =>
    new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(MOCK_COGNITO_USER);

          setTimeout(() => {
            setIsAuthenticated(true);
          }, 1000);
        }, 3000);
      } catch (error) {
        reject(error);
      }
    });

  return (
    <AuthenticationContext.Provider
      value={{
        authenticating,
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
