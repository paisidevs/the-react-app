import { useLocalStorage } from './useLocalStorage';
import { usePrefersDarkMode } from './usePrefersDarkMode';

function useDarkMode() {
  // Use our useLocalStorage hook to persist state through a page refresh.
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');

  // See if user has set a browser or OS preference for dark mode.
  const prefersDarkMode = usePrefersDarkMode();

  // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  // This allows user to override OS level setting on our website.
  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

  // Return enabled state and setter
  return [enabled, setEnabledState];
}

export default useDarkMode;
