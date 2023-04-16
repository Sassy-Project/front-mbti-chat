import styled from 'styled-components';

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  hasError?: boolean;
}

const Select = ({ options, value, onChange, onBlur, hasError }: SelectProps) => {
  return (
    <StyledSelect value={value} onChange={onChange} onBlur={onBlur} hasError={hasError}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select<Pick<SelectProps, 'hasError'>>`
  height: 48px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.hasError ? '#bf0b0b !important' : null)};
  font-size: 14px;
`;

export default Select;
