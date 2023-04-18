/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

interface SelectProps {
  id: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  hasError?: boolean;
}

const Select = ({ id, value, options, onChange, onBlur, hasError }: SelectProps) => {
  return (
    <StyledSelect id={id} value={value} onChange={onChange} onBlur={onBlur}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select<Pick<SelectProps, 'hasError'>>`
  height: 48px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.hasError ? '#bf0b0b' : null)};
  font-size: 14px;
`;

export default Select;
