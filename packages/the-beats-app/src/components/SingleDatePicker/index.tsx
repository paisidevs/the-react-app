import { Box, Text } from '@elandamor/tra-components';
import { ErrorMessage, FieldConfig, useFormikContext } from 'formik';
import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import {
  OpenDirectionShape,
  SingleDatePicker as DatePicker,
} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { Calendar, ChevronLeft, ChevronRight } from 'react-feather';
import { Wrapper } from './styles';

export interface ISingleDatePickerProps extends FieldConfig {
  label: string;
  openDirection?: OpenDirectionShape;
}

/**
 * @render react
 * @name SingleDatePicker component
 * @description SingleDatePicker component.
 * @example
 */

export const SingleDatePicker: FC<ISingleDatePickerProps> = ({
  name,
  validate,
  innerRef,
  label,
  openDirection,
}) => {
  const [focused, setFocused] = useState(false);
  const {
    getFieldProps,
    registerField,
    unregisterField,
    setFieldValue,
  } = useFormikContext();
  const field = getFieldProps({ name });

  const renderDatePicker = () => {
    const Props = {
      focused,
      openDirection,
      id: field.name,
      ref: innerRef,
      date: field.value ? moment(field.value) : moment(),
      isOutsideRange: (day: any) => moment().diff(day) < 0,
      onDateChange: (date: any) => {
        setFieldValue(field.name, date);
      },
      // @ts-ignore - Need to figure out why Type 'null' is not assignable to type 'SetStateAction<boolean>'
      onFocusChange: ({ focused }) => setFocused(focused),
      numberOfMonths: 1,
      customInputIcon: <Calendar size={20} opacity={0.6} />,
      inputIconPosition: 'after' as 'after',
      showDefaultInputIcon: true,
      displayFormat: 'DD/MM/YYYY',
      placeholder: '',
      readOnly: true,
      keepFocusOnInput: true,
      navPrev: (
        <Box
          alignItems="center"
          justifyContent="center"
          height="40px"
          minWidth="40px"
        >
          <ChevronLeft />
        </Box>
      ),
      navNext: (
        <Box
          alignItems="center"
          justifyContent="center"
          height="40px"
          minWidth="40px"
        >
          <ChevronRight />
        </Box>
      ),
    };

    return <DatePicker {...Props} />;
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
    <Wrapper mb="2" activated={field.value || moment()}>
      <label htmlFor={name}>
        <Box alignItems="center" flexDirection="row">
          {renderDatePicker()}
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
