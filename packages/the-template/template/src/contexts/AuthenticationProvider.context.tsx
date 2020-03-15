import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { COGNITO_USER_STORAGE_KEY } from '../constants';
import { useLocalStorage, useSessionStorage } from '../hooks';

type CognitoUser = {
  jwt: string;
  // TODO: Provide correct types
  user: any;
};

type ContextType = {
  authenticating: boolean;
  cognitoUser: CognitoUser;
  isAuthenticated: boolean;
  forgotPassword: (email: string) => void;
  resetPassword: (
    code: string,
    password: string,
    passwordConfirmation: string,
  ) => void;
  signIn: (email: string, password: string, rememberMe: boolean) => void;
  signUp: (username: string, email: string, password: string) => void;
};

const AUTH_ENDPOINT = process.env.REACT_APP_API_HOST + '/auth';

const Errors = {
  invalid: 'Invalid email/password combination',
  exists: {
    email: 'Email already taken',
    username: 'Username already taken',
  },
  unknown: 'An unknown error has occurred',
};

const DEFAULT_STATE = {
  authenticating: true,
  isAuthenticated: false,
  cognitoUser: {} as CognitoUser,
  forgotPassword: (_email: string) => {},
  resetPassword: (
    _code: string,
    _password: string,
    _passwordConfirmation: string,
  ) => {},
  signIn: (_email: string, _password: string, _rememberMe: boolean) => {},
  signUp: (_username: string, _email: string, _password: string) => {},
};

export const AuthenticationContext = React.createContext<ContextType>(
  DEFAULT_STATE,
);

const Provider: FC = ({ children }) => {
  const [localUser, setLocalUser] = useLocalStorage(COGNITO_USER_STORAGE_KEY);
  const [sessionUser, setSessionUser] = useSessionStorage(
    COGNITO_USER_STORAGE_KEY,
  );

  const [authenticating, setAuthenticating] = useState(
    DEFAULT_STATE.authenticating,
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    DEFAULT_STATE.isAuthenticated,
  );
  const [cognitoUser, setCognitoUser] = useState(sessionUser || localUser);

  const persistCognitoUser = (data: any, rememberMe?: boolean) => {
    if (rememberMe) {
      setLocalUser(data);
    } else {
      setSessionUser(data);
    }

    setCognitoUser(data);
  };

  const forgotPassword = async (email: string) => {
    try {
      await axios.post(AUTH_ENDPOINT + '/forgot-password', {
        email,
      });
    } catch ({ response }) {
      const errorId: string = response.data.message[0].messages[0].id;
      const errorMessage: string = response.data.message[0].messages[0].message;

      if (errorId === 'Auth.form.error.user.not-exist') {
        return Promise.reject({ field: 'email', message: errorMessage });
      }

      if (errorId === 'Auth.form.error.email.invalid') {
        return Promise.reject({ message: Errors.unknown });
      }
    }
  };

  const resetPassword = async (
    code: string,
    password: string,
    passwordConfirmation: string,
  ) => {
    try {
      const { data } = await axios.post(AUTH_ENDPOINT + '/reset-password', {
        code,
        password,
        passwordConfirmation,
      });

      persistCognitoUser(data);
      setIsAuthenticated(true);
    } catch ({ response }) {
      const errorId: string = response.data.message[0].messages[0].id;
      const errorMessage: string = response.data.message[0].messages[0].message;

      if (errorId === 'Auth.form.error.code.provide') {
        return Promise.reject({ message: errorMessage });
      }
    }
  };

  const signIn = async (
    username: string,
    password: string,
    rememberMe: boolean = false,
  ) => {
    try {
      setAuthenticating(true);

      const { data } = await axios.post(AUTH_ENDPOINT + '/login', {
        identifier: username,
        password,
      });

      persistCognitoUser(data, rememberMe);
      setIsAuthenticated(true);
    } catch ({ response }) {
      const errorId: string = response.data.message[0].messages[0].id;

      if (errorId === 'Auth.form.error.invalid') {
        return Promise.reject({ message: Errors.invalid });
      }
    } finally {
      setAuthenticating(false);
    }
  };

  const signUp = async (username: string, email: string, password: string) => {
    try {
      const { data } = await axios.post(AUTH_ENDPOINT + '/register', {
        username,
        email,
        password,
      });

      persistCognitoUser(data);
      setIsAuthenticated(true);
    } catch ({ response }) {
      const errorId: string = response.data.message[0].messages[0].id;

      if (errorId === 'Auth.form.error.email.taken') {
        return Promise.reject({ field: 'email', message: Errors.exists.email });
      }

      if (errorId === 'Auth.form.error.username.taken') {
        return Promise.reject({
          field: 'username',
          message: Errors.exists.username,
        });
      }
    }
  };

  useEffect(() => {
    if (cognitoUser) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setAuthenticating(false);
  }, [cognitoUser]);

  return (
    <AuthenticationContext.Provider
      value={{
        authenticating,
        cognitoUser,
        forgotPassword,
        isAuthenticated,
        resetPassword,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default Provider;
