import React from "react";

interface InputProps {
  label: string;
  name: string;
  type?: string;
}

export default function Input({ label, name, type = 'text' }: InputProps): JSX.Element {
  return (
    <label className="block">
      <div className="text-sm font-medium mb-1">{label}</div>
      <input className="input-field" name={name} type={type} />
    </label>
  );
}
