import { Form as LoginForm } from '@components/Form';
import React from 'react';

type Event = React.ChangeEvent<HTMLInputElement>;

export default function Login() {
  const [email, emailSet] = React.useState('');
  const [password, passwordSet] = React.useState('');

  const fields = [
    {
      value: email,
      onChange: (e: Event) => emailSet(e.target.value),
      id: 'email',
      label: 'Email',
    },
    {
      value: password,
      onChange: (e: Event) => passwordSet(e.target.value),
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
    <LoginForm
      submit={submit}
      fields={fields}
    />
  );
}
