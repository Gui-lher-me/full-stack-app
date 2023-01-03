import { Form } from '@components/Form';
import React from 'react';

export default function Login() {
  const [email, emailSet] = React.useState('');
  const [password, passwordSet] = React.useState('');

  const fields = [
    {
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        emailSet(e.target.value),
      id: 'email',
      label: 'Email',
    },
    {
      value: password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        passwordSet(e.target.value),
      id: 'password',
      label: 'Password',
    },
  ];

  const isValid = () => {
    return true;
  };

  const submit = () => {
    if (!isValid()) return;

    // make a request
    console.log('was submitted');
  };

  return (
    <Form
      submit={submit}
      fields={fields}
    />
  );
}
