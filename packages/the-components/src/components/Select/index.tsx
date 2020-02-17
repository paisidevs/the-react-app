import { ErrorMessage, FieldConfig, useFormikContext } from 'formik';
import React, { FC, useEffect } from 'react';
import { components, Props as SelectProps } from 'react-select';
import { titleCase } from 'title-case';
import Text from '../../typography/Text';
import { Box } from '../Box';
import { DefaultSelect, DropdownIndicator, Wrapper } from './styles';

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
  isMulti,
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
      isMulti,
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
        <Box alignItems="flex-start" flexDirection="row">
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
