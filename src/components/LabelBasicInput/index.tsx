import React from 'react';
import Label from '../styled-components/Label';
import BasicInput from '../styled-components/BasicInput';

const LabelBasicInput = (props: any) => {
  const { label, text, name, id, type, value, onChange, onBlur, hasError, placehoder, isFocused } =
    props;
  return (
    <div>
      <Label htmlFor={label} text={text} />
      <BasicInput
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        hasError={hasError}
        placeholder={placehoder}
        isFocused={isFocused}
      />
      {hasError ? <span className='BasicInput__error'>메시지 props 필요</span> : null}
    </div>
  );
};

export default LabelBasicInput;
