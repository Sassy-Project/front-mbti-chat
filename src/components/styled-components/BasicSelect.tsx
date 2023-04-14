import styled from 'styled-components';

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, value, onChange }: SelectProps) => {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  height: 48px;
  padding: 0 10px;
  border-radius: 5px;
  font-size: 14px;
`;

export default Select;
