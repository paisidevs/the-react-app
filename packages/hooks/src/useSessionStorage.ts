import { useStorage } from './useStorage';

// Hook
export const useSessionStorage = (key: string, initialValue?: any) =>
  useStorage('session', key, initialValue);
