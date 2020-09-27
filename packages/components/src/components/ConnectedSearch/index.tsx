import { Box, Flex, theme } from '@chakra-ui/core';
import { useFormikContext } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { Search } from 'react-feather';
import ConnectedInput from '../ConnectedInput';

interface ConnectedSearchProps {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  suggestions?: string[];
}

/**
 * @render react
 * @name ConnectedSearch component
 * @description Search input component with autosuggest.
 * @example
 * <ConnectedSearch name="searchTerm" placeholder="Search" suggestions={['One', 'Two', 'Three']} />
 */

const ConnectedSearch: FC<ConnectedSearchProps> = ({
  name,
  placeholder,
  suggestions: defaultSuggestions,
}) => {
  const [activeSuggestion, setActiveSuggestion] = useState<number | null>(null);
  const [suggestions, setSuggestions] = useState(defaultSuggestions || []);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const { setFieldValue, values } = useFormikContext<any>();
  const fieldValue = values[name] || '';

  const changeActiveSuggestion = (direction: number) => {
    if (suggestions.length === 0) return;

    switch (direction) {
      case 1: // Down
        if (activeSuggestion === suggestions.length - 1) {
          setActiveSuggestion(0);
          return;
        }
        setActiveSuggestion((activeSuggestion) =>
          !activeSuggestion && activeSuggestion !== 0
            ? 0
            : activeSuggestion + 1,
        );
        break;
      case -1: // Up
        if (!activeSuggestion) {
          setActiveSuggestion(suggestions.length - 1);
          return;
        }
        setActiveSuggestion(activeSuggestion - 1);
        break;
      default:
    }
  };

  const onSuggestionSelect = (
    suggestion: string,
    event?: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event) {
      event.stopPropagation();
    }

    setActiveSuggestion(null);
    Promise.resolve(setFieldValue(name, suggestion)).then(() =>
      setShowSuggestions(false),
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent<any>) => {
    switch (event.key) {
      case 'Enter':
        if (activeSuggestion !== null) {
          onSuggestionSelect(suggestions[activeSuggestion]);
        }
        setShowSuggestions(false);
        break;
      case 'ArrowDown':
        changeActiveSuggestion(1);
        break;
      case 'ArrowUp':
        changeActiveSuggestion(-1);
        break;
      default:
    }
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) return null;

    return (
      <Box>
        {suggestions.map((suggestion, index) => (
          <Flex
            key={suggestion + '' + index}
            backgroundColor={
              index === activeSuggestion ? 'gray.100' : 'transparent'
            }
            fontSize="sm"
            onClick={(event) => {
              onSuggestionSelect(suggestion, event);
            }}
            role="presentation"
            cursor="pointer"
            paddingX={2}
            paddingY={1}
          >
            {suggestion}
          </Flex>
        ))}
      </Box>
    );
  };

  useEffect(() => {
    const filterSuggestions = (value: string) => {
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;

      return inputLength === 0
        ? []
        : defaultSuggestions?.filter(
            (suggestion) =>
              suggestion.toLowerCase().slice(0, inputLength) === inputValue,
          ) || [];
    };

    if (fieldValue.length > 0) {
      setSuggestions(filterSuggestions(fieldValue));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [fieldValue]); // eslint-disable-line

  return (
    <Box position="relative" width="100%">
      <ConnectedInput
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        size="lg"
        type="search"
        inputLeftElement={<Search size="1.25em" strokeWidth={1.5} />}
        onKeyDown={handleKeyDown}
      />
      {showSuggestions && (
        <Box
          backgroundColor="white"
          borderWidth={1}
          boxShadow={theme.shadows.sm}
          left={0}
          position="absolute"
          top="105%"
          width="100%"
          zIndex={3}
        >
          {renderSuggestions()}
        </Box>
      )}
    </Box>
  );
};

export default ConnectedSearch;
