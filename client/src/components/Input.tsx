import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input(props: Props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props} />
    </div>
  );
}
