import { SyntheticEvent } from 'react';
import styled from 'styled-components';

interface InputProps {
  name: string;
  id: string;
  type: string;
  value: string;
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
  onBlur?: (e: SyntheticEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  placeholder?: string;
  isFocused?: boolean;
}

const BasicInput = ({
  name,
  id,
  type,
  value,
  onChange,
  onBlur,
  hasError,
  placeholder,
  isFocused,
}: InputProps) => {
  return (
    <div className='BasicInput'>
      <StyledInput
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
    </div>
  );
};

const StyledInput = styled.input<
  Omit<InputProps, 'name' | 'id' | 'type' | 'value' | 'onChange' | 'onBlur' | 'placeholder'>
>`
  height: 48px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.hasError ? '#bf0b0b' : null)};
  font-size: 14px;
  /* isFocused를 통해 불린값을 주게되면 focus색상을 선택할 수 있습니다. */
  &:focus {
    outline: none;
    border-color: ${(props) => (props.isFocused ? '#68E4AA' : '#12BCFD')};
  }
`;

export default BasicInput;
