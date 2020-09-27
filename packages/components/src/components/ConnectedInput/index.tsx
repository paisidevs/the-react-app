import {
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  theme,
} from '@chakra-ui/core';
import { InputProps } from '@chakra-ui/core/dist/Input';
import { useField } from 'formik';
import React, { FC, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

export type ConnectedInputProps = InputProps & {
  hideError?: boolean;
  label?: string;
  name: string;
  inputLeftElement?: React.ReactNode;
};

/**
 * @render react
 * @name ConnectedInput component
 * @description ConnectedInput component.
 * @example
 * <ConnectedInput />
 */

const ConnectedInput: FC<ConnectedInputProps> = ({
  hideError,
  label,
  inputLeftElement,
  size,
  ...rest
}) => {
  const [field, meta] = useField(rest.name);
  const [show, setShow] = useState(false);
  const hasError = Boolean(meta.touched && meta.error);


  const inputProps = {
    _focus: {
      borderColor: 'gray.900',
    },
    // fontSize: 2,
    // paddingX: 2,
    size,
    ...(hasError && {
      borderColor: 'red.500',
      color: 'red.500',
      _focus: {
        boxShadow: `0 0 0 1px ${theme.colors.red[500]}`,
        borderColor: 'red.500',
      },
    }),
  };

  return (
    <Flex
      flexDirection="column"
      width="100%"
      mr={rest.mr}
      ml={rest.ml}
      mt={rest.mt}
      mb={rest.mb}
    >
      <FormControl>
        {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
        <InputGroup size={size}>
          {inputLeftElement && (
            <InputLeftElement size={size}>{inputLeftElement}</InputLeftElement>
          )}
          <Input
            {...field}
            id={field.name}
            {...inputProps}
            {...rest}
            type={show ? 'text' : rest.type}
            marginBottom={0}
          />
          {rest.type === 'password' && (
            <InputRightElement>
              <Icon
                size="20px"
                onClick={() => setShow(!show)}
                as={show ? EyeOff : Eye}
                color={show ? 'secondary.500' : 'primary.400'}
                {...(hasError && { color: theme.colors.red[500] })}
                // @ts-ignore - 'strokeWidth' doesn't exist in Icon props but does in `as` variant
                strokeWidth={1.5}
              />
            </InputRightElement>
          )}
        </InputGroup>
        {hasError && !hideError ? (
          <Text color="red.500" fontSize={0} fontWeight={600}>
            {meta.error}
          </Text>
        ) : null}
      </FormControl>
    </Flex>
  );
};

export default ConnectedInput;
