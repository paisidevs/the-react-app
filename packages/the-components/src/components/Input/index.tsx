import { ErrorMessage, FieldProps } from 'formik';
import React, { FC, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import Text from '../../typography/Text';
import Box from '../Box';
import Flex from '../Flex';

export interface IInputProps extends FieldProps {
  autoComplete?: string;
  hideLabel?: boolean;
  label: string;
  placeholder?: string;
  readOnly?: boolean;
  type?: 'text' | 'email' | 'number' | 'password' | 'file';
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;
}

/**
 * @render react
 * @name Input component
 * @description Input component.
 * @example
 * <Input
 *  id="text"
 *  label="Text"
 *  name="text"
 *  type="text"
 * />
 */

const Input: FC<IInputProps> = ({
  field,
  hideLabel,
  label,
  startAdornment,
  endAdornment,
  ...rest
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const isPasswordInput = rest.type === 'password';

  const inputProps = {
    ...field,
    'aria-label': label,
    id: field.name,
    placeholder: rest.placeholder,
    readOnly: rest.readOnly,
    type: passwordVisible ? 'text' : rest.type,
    ...(rest.autoComplete ? { autoComplete: rest.autoComplete } : {}),
  };

  return (
    <Box mb="2">
      <label htmlFor={field.name}>
        {!hideLabel && (
          <Flex mb="1">
            <Text mb="0">{label}</Text>
          </Flex>
        )}
        <Box alignItems="center" flexDirection="row">
          <input {...inputProps} />
          {isPasswordInput && (
            <Box
              position="absolute"
              right="6px"
              height="40px"
              width="40px"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <Eye /> : <EyeOff />}
            </Box>
          )}
        </Box>
      </label>
      <ErrorMessage name={field.name}>
        {(message) => (
          <Text color="intent.warning" fontSize="2" mt="1">
            {message}
          </Text>
        )}
      </ErrorMessage>
    </Box>
  );
};

Input.defaultProps = {
  placeholder: '',
  readOnly: false,
};

export default Input;
