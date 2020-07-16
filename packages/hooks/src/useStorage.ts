import { logger } from '@paisidevs/tra-utilities';
import { useState } from 'react';

// Hook
export const useStorage = (
  type: 'session' | 'local',
  key: string,
  initialValue?: any,
) => {
  const Storage =
    type === 'session' ? window.sessionStorage : window.localStorage;
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = Storage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      logger(error);
      // If error also return initialValue
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      Storage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      logger(error);
    }
  };

  const clearValue = () => {
    try {
      // Clear Storage
      Storage.removeItem(key);
    } catch (error) {
      // A more advanced implementation would handle the error case
      logger(error);
    }
  };

  return [storedValue, setValue, clearValue];
};
