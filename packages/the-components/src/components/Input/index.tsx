import {
  color,
  css,
  layout,
  shouldForwardProp,
  space,
  styled,
  theme,
} from '@app/theme';
import { ErrorMessage, FieldConfig, useFormikContext } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import Measure from 'react-measure';
import Text from '../../typography/Text';
import { Box } from '../Box';

export interface IInputProps extends FieldConfig {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  inlineStartAdornment?: boolean;
  label: string;
  placeholder?: string;
}

const Wrapper = styled(Box)<{ activated: boolean }>`
  .label {
    opacity: 0.6;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    transition: transform 0.195s ease-in-out;
    transform-origin: left top;

    ${({ activated }) =>
      activated &&
      css`
        transform: translateY(-80%)
          scale(${theme.fontSizes[1] / theme.fontSizes[3]});
      `}

    span {
      letter-spacing: 0.009375em;
    }
  }

  .c-adornment--start {
    opacity: 0;

    ${({ activated }) =>
      activated &&
      css`
        opacity: 0.5;
      `}
  }
`;

Wrapper.defaultProps = {
  color: 'text.default',
};

const DefaultInput = styled('input', { shouldForwardProp })`
  ${color}
  ${layout}
  ${space}
  background: ${({ theme }) =>
    theme.isDark
      ? theme.colors.opacity.whites[2]
      : theme.colors.opacity.blacks[2]};
  border: none;
  border-bottom: ${theme.borders[1]} ${theme.colors.border.default};
  border-radius: ${theme.space[1] / 2}px;
  font-size: ${theme.fontSizes[3]}px;
  letter-spacing: .009375em;
  padding-top: ${theme.space[2]}px;
  position: relative;
  width: 100%;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: ${({ theme }) =>
      theme.isDark
        ? theme.colors.opacity.whites[2]
        : theme.colors.opacity.blacks[2]};
    border-bottom: ${theme.borders[1]} ${theme.colors.border.default};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text.default};
    -webkit-box-shadow: none;
    transition: background-color 5000s ease-in-out 0s;

    &:focus {
      border-bottom-color: ${({ theme }) => theme.colors.primary.base};
    }
  }

  &:focus,
  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.primary.base};
    outline: none;
  }

  &:focus ~ .label {
    opacity: 0.87;
    transform: translateY(-80%) scale(${theme.fontSizes[1] /
      theme.fontSizes[3]});
  }

  &:focus ~ .c-adornment--start {
    opacity: 0.5;
  }
`;

DefaultInput.defaultProps = {
  color: 'text.default',
  height: '56px',
};

const Adornment = styled(Box)`
  height: 100%;
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: 56px;
  ${color}
  ${layout}
  ${space}

  &:focus,
  &:hover {
    opacity: 0.87;
  }
`;

Adornment.defaultProps = {
  alignItems: 'center',
  display: 'flex',
  color: 'text.default',
  justifyContent: 'center',
};

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

export const Input: FC<IInputProps> = ({
  name,
  startAdornment,
  endAdornment,
  inlineStartAdornment,
  validate,
  innerRef,
  type = 'text',
  label,
  ...rest
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [startAdornmentWidth, setStartAdornmentWidth] = useState<
    number | undefined
  >(0);

  const {
    getFieldProps,
    registerField,
    unregisterField,
    setFieldValue,
  } = useFormikContext();
  const field = getFieldProps({ name });

  const isActivated =
    type === 'number'
      ? Boolean(field.value)
      : typeof field.value === 'string'
      ? field.value.trim().length > 0
      : field.value.value.trim().length > 0;

  const renderValue = () => {
    if (typeof field.value === 'string') {
      return field.value;
    }

    if (typeof field.value === 'object') {
      return field.value.value;
    }

    return field.value || '';
  };

  const isPasswordInput = type === 'password';
  const adornmentProps = {};

  const inputProps = {
    ...field,
    id: field.name,
    type: passwordVisible ? 'text' : type,
    ref: innerRef,
    pl: startAdornment ? '56px' : '16px',
    pr: endAdornment || isPasswordInput ? '56px' : '16px',
    placeholder: rest.placeholder,
    ...(startAdornment &&
      inlineStartAdornment && { pl: `${20 + (startAdornmentWidth || 0)}px` }),
    onChange: (event: any) => {
      const value = event.target.value;

      const parsedValue = typeof value === 'string' ? value : value.value;
      setFieldValue(field.name, parsedValue);
    },
    value: renderValue(),
  };

  const renderInput = () => {
    if (startAdornment && inlineStartAdornment) {
      return (
        <React.Fragment>
          <DefaultInput {...inputProps} />
          <Adornment
            className="c-adornment--start"
            left={2}
            paddingTop={2}
            width={startAdornmentWidth || 0}
            {...adornmentProps}
          >
            <Measure
              bounds
              onResize={(rect) => {
                setStartAdornmentWidth(rect.bounds?.width);
              }}
            >
              {({ measureRef }) => <div ref={measureRef}>{startAdornment}</div>}
            </Measure>
          </Adornment>
        </React.Fragment>
      );
    }
    return <DefaultInput {...inputProps} />;
  };

  const renderPasswordAdornment = () => {
    return passwordVisible ? <Eye /> : <EyeOff />;
  };

  // Register field and field-level validation with parent <Formik>
  useEffect(() => {
    registerField(name, {
      validate: validate,
    });

    return () => {
      unregisterField(name);
    };
  }, [registerField, unregisterField, name, validate]);

  return (
    <Wrapper mb="2" activated={isActivated}>
      <label htmlFor={name}>
        <Box alignItems="center" flexDirection="row">
          {startAdornment && !inlineStartAdornment && (
            <Adornment left="0" {...adornmentProps}>
              {startAdornment}
            </Adornment>
          )}
          {renderInput()}
          {(endAdornment || isPasswordInput) && (
            <Adornment
              right="0"
              {...adornmentProps}
              {...(isPasswordInput && {
                onClick: () => setPasswordVisible(!passwordVisible),
              })}
            >
              {isPasswordInput ? renderPasswordAdornment() : endAdornment}
            </Adornment>
          )}
          <Box
            className="label"
            position="absolute"
            left={startAdornment && !inlineStartAdornment ? '56px' : '16px'}
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
