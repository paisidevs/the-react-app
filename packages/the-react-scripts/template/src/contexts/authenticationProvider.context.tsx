import React, { FC, useState, useEffect } from 'react';
import { JWT_LOCAL_STORAGE_KEY } from '@app/constants';

const DEFAULT_STATE = {
  authenticating: true,
  isAuthenticated: false,
  setIsAuthenticated: (bool: boolean) => {},
};

export const AuthenticationContext = React.createContext(DEFAULT_STATE);

interface IProps {
  children: React.ReactNode;
}

const Provider: FC<IProps> = (props) => {
  const [authenticating, setAuthenticating] = useState(DEFAULT_STATE.authenticating);
  const [isAuthenticated, setIsAuthenticated] = useState(DEFAULT_STATE.isAuthenticated);

  /**
   * Check if token is valid
   */
  const isTokenValid = (token: string | null) => {
    if (!token) {
      return false;
    }

    try {
      // Token validation happens here...
      return true;
    } catch (e) {
      return false;
    }
  }

  useEffect(() => {
    const JWT = window.localStorage.getItem(JWT_LOCAL_STORAGE_KEY);

    if (isTokenValid(JWT)) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    setAuthenticating(false);
  }, []);

  return (
    <AuthenticationContext.Provider value={{ authenticating, isAuthenticated, setIsAuthenticated }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export default Provider;
