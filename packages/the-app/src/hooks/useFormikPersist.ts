import { useEffect, useState } from 'react';

export interface IPersistProps {
  name: string;
  options?: {
    debounceNumber?: number;
    isSessionStorage?: boolean;
  };
}

export const useFormikPersist = (
  name: string,
  options: { debounceNumber?: number; isSessionStorage?: boolean } = {
    debounceNumber: 300,
    isSessionStorage: true,
  },
) => {
  const [persistedState, setPersistedState] = useState();

  const { isSessionStorage } = options;

  useEffect(() => {
    const state = isSessionStorage
      ? window.sessionStorage.getItem(name)
      : window.localStorage.getItem(name);

    if (state && state !== null) {
      setPersistedState(JSON.parse(state));
    }
  }, []); // eslint-disable-line

  console.log({ persistedState });

  return { persistedState };
};
