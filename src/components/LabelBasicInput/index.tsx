import React, { SyntheticEvent } from 'react';
import Label from '../styled-components/Label';
import BasicInput from '../styled-components/BasicInput';
import './style.scss';

interface LabelBasicInputProps {
  label?: string;
  text: string;
  name?: string;
  id?: string;
  type?: string;
  value: string;
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
  onBlur?: (e: SyntheticEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  placeholder?: string;
  errorMessage?: string;
  isFocused?: boolean;
}

const LabelBasicInput = (props: LabelBasicInputProps) => {
  const {
    label,
    text,
    name,
    id,
    type,
    value,
    onChange,
    onBlur,
    hasError,
    placeholder,
    errorMessage,
    isFocused,
  } = props;
  return (
    <div className='FormContainer'>
      <Label htmlFor={label} text={text} />
      <BasicInput
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        hasError={hasError}
        placeholder={placeholder}
        isFocused={isFocused}
      />
      {hasError ? <span className='BasicInput__error'>{errorMessage}</span> : null}
    </div>
  );
};

export default LabelBasicInput;
