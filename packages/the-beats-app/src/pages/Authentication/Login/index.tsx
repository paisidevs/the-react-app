import { Button, Form, Input } from '@elandamor/tra-components';
import React from 'react';
import * as Yup from 'yup';
import { useAuthentication } from '../../../hooks';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is not valid')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
});

const Login: React.FC = () => {
  const { signIn } = useAuthentication();

  return (
    <Form
      name="login"
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await signIn(values.email, values.password);
          setSubmitting(false);
        } catch (error) {
          setSubmitting(false);
          return error;
        }
      }}
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
    >
      <Input label="Email" name="email" type="email" />
      <Input label="Password" name="password" type="password" />
      <Button variant="primary" type="submit" text="LOGIN" />
    </Form>
  );
};

export default Login;
