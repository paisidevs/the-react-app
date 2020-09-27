import useMedia from './useMedia';
import useStorage from './useStorage';

const useDarkMode = () => {
  // Use our useLocalStorage hook to persist state through a page refresh.
  const [enabledState, setEnabledState] = useStorage(
    'local',
    'dark-mode-enabled',
  );

  // See if user has set a browser or OS preference for dark mode.
  const prefersDarkMode = useMedia(
    ['(prefers-color-scheme: dark)'],
    [true],
    false,
  );

  // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  // This allows user to override OS level setting.
  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

  // Return enabled state and setter
  return [enabled, setEnabledState];
};

export default useDarkMode;
