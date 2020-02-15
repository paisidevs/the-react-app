import { Box, Button, Form, Input } from '@elandamor/tra-components';
import { theme } from '@elandamor/tra-theme';
import React, { useState } from 'react';
import { UserCheck } from 'react-feather';
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
  const [status, setStatus] = useState('idle');
  const { signIn } = useAuthentication();

  return (
    <Form
      name="login"
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          await signIn(values.email, values.password);
          setStatus('success');
          resetForm();
          setSubmitting(false);
        } catch (error) {
          setSubmitting(false);
        }
      }}
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      persist={true}
    >
      <Input label="Email" name="email" type="email" />
      <Input label="Password" name="password" type="password" />
      <Button variant="primary" type="submit" text="LOGIN" />

      {status === 'success' && (
        <Box
          backgroundColor="background.base"
          alignItems="center"
          justifyContent="center"
          top={2}
          right={2}
          bottom={2}
          left={2}
          position="absolute"
          width="auto"
          zIndex={2}
        >
          <UserCheck color={theme.colors.intent.success} size={48} />
        </Box>
      )}
    </Form>
  );
};

export default Login;
