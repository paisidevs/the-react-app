import { color, css, layout, space, styled, theme } from '@elandamor/tra-theme';
import { ErrorMessage, FieldConfig, useFormikContext } from 'formik';
import React, { FC, useEffect } from 'react';
import { ChevronDown } from 'react-feather';
import { components, Props as SelectProps } from 'react-select';
import ReactSelect from 'react-select/creatable';
import { titleCase } from 'title-case';
import Text from '../../typography/Text';
import { Box } from '../Box';

type Option = { label: string | number; value: string | number };

export interface ISelectProps extends SelectProps {
  label: string;
  placeholder?: string;
}

/**
 * This function serves to mutate an enum value which is
 * being returned from the backend into an object that's compatible
 * with react-select.
 * @param { string | { label: string, value: string } } data - the variable
 * to either be returned if it's already a select object,
 * or to be made into one if it isn't.
 */
export default function formatSelectValue(
  data: string | { label: string; value: string },
  options: { changeCase?: boolean } = { changeCase: true },
): { label: string; value: string } | null {
  try {
    if (
      data &&
      typeof data === 'object' &&
      'label' in data &&
      'value' in data
    ) {
      return data;
    }

    if (data && typeof data !== 'object') {
      return {
        label: options.changeCase ? titleCase(data) : data,
        value: data,
      };
    }

    return null;
  } catch (error) {
    return null;
  }
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
`;

Wrapper.defaultProps = {
  color: 'text.default',
};

const DefaultSelect = styled(ReactSelect)`
  ${color}
  ${layout}
  ${space}

  background: ${({ theme }) =>
    theme.isDark
      ? theme.colors.opacity.whites[2]
      : theme.colors.opacity.blacks[2]};
  border-radius: ${theme.space[1] / 2}px;
  position: relative;
  width: 100%;

  &:focus-within {
    ~ .label {
      opacity: 0.87;
      transform: translateY(-80%) scale(${theme.fontSizes[1] /
        theme.fontSizes[3]});
    }

    .react-select__single-value {
      opacity: 0.5;
    }
  }

  .react-select__control {
    background: none;
    border: none;
    border-bottom: ${theme.borders[1]} ${theme.colors.border.default};
    border-radius: ${theme.space[1] / 2}px;
    box-shadow: none;
    font-size: ${theme.fontSizes[3]}px;
    height: ${({ height }) => height};
    letter-spacing: .009375em;
    width: 100%;

    * {
      ${color}
    }

    &--is-focused {
      border-bottom-color: ${({ theme }) => theme.colors.primary.base};
    }
  }

  .react-select__menu {
    background-color: ${({ theme }) => theme.colors.background.surface};
  }

  .react-select__option {
    font-size: ${theme.fontSizes[2]}px;
    padding: 12px 16px;

    &--is-focused {
      background: ${({ theme }) =>
        theme.isDark
          ? theme.colors.opacity.whites[3]
          : theme.colors.opacity.blacks[3]};
    }
  }

  .react-select__value-container {
    padding: 16px 16px 0 16px;
  }
`;

DefaultSelect.defaultProps = {
  color: 'text.default',
  height: '56px',
};

const DropdownIndicator = styled(ChevronDown)<{ open: boolean }>`
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'none')};
`;

/**
 * @render react
 * @name Select component
 * @description Select component.
 * @example
 * <Select
 *  label="Option"
 *  name="option"
 * />
 */

export const Select: FC<ISelectProps & FieldConfig> = ({
  name,
  validate,
  innerRef,
  label,
  isSearchable = true,
  options = [],
  placeholder = '',
  autoFocus = false,
  defaultMenuIsOpen = false,
  hideSelectedOptions = true,
  menuPlacement = 'auto',
}) => {
  const {
    getFieldProps,
    registerField,
    unregisterField,
    setFieldValue,
  } = useFormikContext();
  const field = getFieldProps({ name });

  const renderSelect = () => {
    const SelectProps = {
      ...field,
      autoFocus,
      defaultMenuIsOpen,
      hideSelectedOptions,
      isSearchable,
      menuPlacement,
      options,
      placeholder,
      id: field.name,
      ref: innerRef,
      classNamePrefix: 'react-select',
      name: field.name,
      components: {
        DropdownIndicator: (props: any) => {
          const {
            selectProps: { defaultMenuIsOpen },
          } = props;

          return (
            <components.DropdownIndicator {...props}>
              <DropdownIndicator open={defaultMenuIsOpen} />
            </components.DropdownIndicator>
          );
        },
      },
      styles: {
        dropdownIndicator: (base: object) => ({
          ...base,
          opacity: 0.6,
          padding: '8px 12px',
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        input: (base: object) => ({
          ...base,
          margin: '2px 0',
        }),
        menu: (base: object) => ({
          ...base,
          zIndex: 5,
        }),
        singleValue: (base: object) => ({
          ...base,
          marginLeft: '0px',
          marginTop: '8px',
        }),
      },
      onChange: (option: Option) => {
        setFieldValue(field.name, option);
      },
    };

    return <DefaultSelect {...SelectProps} />;
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
    <Wrapper mb="2" activated={field.value}>
      <label htmlFor={name}>
        <Box alignItems="center" flexDirection="row">
          {renderSelect()}
          <Box className="label" position="absolute" left={2}>
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
