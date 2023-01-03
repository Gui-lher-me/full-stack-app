import React from 'react';
import { Input } from './Input';

type Field = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
};

interface Props {
  submit: () => void;
  fields: Field[];
}

export function Form(props: Props) {
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        props.submit();
      }}
    >
      {props.fields.map((field) => (
        <Input
          key={field.id}
          value={field.value}
          onChange={field.onChange}
          id={field.id}
          label={field.label}
        />
      ))}
      <button>Submit</button>
    </form>
  );
}
