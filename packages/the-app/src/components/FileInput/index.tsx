import { Box, Text } from '@app/components';
import { ErrorMessage, FieldConfig, useFormikContext } from 'formik';
import React, { FC, useEffect } from 'react';
import { Uploader } from '../Uploader';
import { Adornment, DefaultInput, Wrapper } from './styles';

export interface IInputProps extends FieldConfig {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  label: string;
  placeholder?: string;
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

export const FileInput: FC<IInputProps> = ({
  name,
  startAdornment,
  endAdornment,
  validate,
  innerRef,
  label,
  ...rest
}) => {
  const {
    getFieldProps,
    registerField,
    unregisterField,
    setFieldValue,
  } = useFormikContext();
  const field = getFieldProps({ name });
  const adornmentProps = {};

  const inputProps = {
    ...field,
    type: 'text',
    id: field.name,
    readOnly: true,
    ref: innerRef,
    pl: startAdornment ? '56px' : '16px',
    pr: endAdornment ? '56px' : '16px',
    placeholder: rest.placeholder,
    value: field.value?.data?.name || field.value?.name,
  };

  const renderInput = () => (
    <Box>
      <DefaultInput {...inputProps} />
      <Box position="absolute" left={0} top={0} height="100%" width="100%">
        <Uploader onFileAdded={(file) => setFieldValue(field.name, file)} />
      </Box>
    </Box>
  );

  // Register field and field-level validation with parent <Formik>
  useEffect(() => {
    registerField(name, {
      validate: validate,
    });

    return () => {
      unregisterField(name);
    };
  }, [registerField, unregisterField, name, validate]);

  console.log({ field });

  return (
    <Wrapper mb="2" activated={field.value?.id}>
      <label htmlFor={name}>
        <Box alignItems="center" flexDirection="row">
          {startAdornment && (
            <Adornment left="0" {...adornmentProps}>
              {startAdornment}
            </Adornment>
          )}
          {renderInput()}
          {endAdornment && (
            <Adornment right="0" {...adornmentProps}>
              {endAdornment}
            </Adornment>
          )}
          <Box
            className="label"
            position="absolute"
            left={startAdornment ? '56px' : '16px'}
          >
            <Text fontSize="3">{label}</Text>
          </Box>
        </Box>
      </label>
      <ErrorMessage name={field.name}>
        {(message) => (
          <Text
            display="block"
            color="intent.error"
            fontSize="1"
            pl="2"
            lineHeight={2}
          >
            {message}
          </Text>
        )}
      </ErrorMessage>
    </Wrapper>
  );
};
