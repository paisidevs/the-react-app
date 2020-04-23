import { useStorage } from './useStorage';

// Hook
export const useLocalStorage = (key: string, initialValue?: any) =>
  useStorage('local', key, initialValue);
