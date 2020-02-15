import { Button, Form, Input } from '@elandamor/tra-components';
import React from 'react';
import * as Yup from 'yup';
import { useAuthentication } from '../../../hooks';

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is not valid')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password')], 'Password does not match'),
});

const Register: React.FC = () => {
  const { Errors, signUp } = useAuthentication();

  return (
    <Form
      name="signup"
      onSubmit={async (values, { setFieldError, setSubmitting }) => {
        try {
          await signUp(values.email, values.password);
          setSubmitting(false);
        } catch (error) {
          setSubmitting(false);

          if (error.message.match(Errors.accountExists.message)) {
            setFieldError('email', Errors.accountExists.message);
            return;
          }
        }
      }}
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validationSchema={RegisterSchema}
      persist={true}
    >
      <Input label="Email" name="email" type="email" />
      <Input label="Password" name="password" type="password" />
      <Input label="Confirm Password" name="confirmPassword" type="password" />
      <Button variant="primary" type="submit" text="REGISTER" />
    </Form>
  );
};

export default Register;
