import { isFunction } from '@app/utilities';
import {
  Form as ImpForm,
  Formik,
  FormikConfig,
  FormikHelpers,
  FormikProps,
  FormikValues,
} from 'formik';
import React, { useState } from 'react';
import { ConnectedPersist } from './Persist';

interface IFormProps extends FormikConfig<FormikValues> {
  name: string;
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>,
  ) => void;
  persist?: boolean;
}

export const Form: React.FC<IFormProps> = ({
  children,
  name,
  onSubmit,
  persist,
  ...props
}) => {
  const [clearPersist, setClearPersist] = useState(false);

  return (
    <Formik
      onSubmit={onSubmit}
      onReset={() => setClearPersist(true)}
      {...props}
    >
      {(formikProps) => {
        const childrenWithProps = React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;

          return child.props.type === 'submit'
            ? React.cloneElement(child, {
                disabled: formikProps.isSubmitting,
                isLoading: formikProps.isSubmitting,
              })
            : child;
        });

        const formChildren = isFunction(children)
          ? (children as (props: FormikProps<FormikValues>) => React.ReactNode)(
              formikProps,
            )
          : childrenWithProps;

        return (
          <ImpForm>
            <fieldset disabled={formikProps.isSubmitting}>
              {formChildren}
            </fieldset>
            {persist && (
              <ConnectedPersist name={name} clearPersist={clearPersist} />
            )}
          </ImpForm>
        );
      }}
    </Formik>
  );
};
