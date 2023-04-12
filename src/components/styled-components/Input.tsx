import styled from 'styled-components';

interface InputProps {
  hasError?: boolean;
  isFocused?: boolean;
  type?: string;
}

const Input = styled.input<InputProps>`
  height: 48px;
  width: 338px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  margin-bottom: 10px;
  font-size: 14px;

  &__error {
    font-size: 14px;
    color: #bf0b0b;
  }

  &:focus {
    border-color: ${(props) => (props.isFocused ? '#68E4AA' : '#12BCFD')};
  }

  ${(props) =>
    props.type === 'number' &&
    `
  `}
`;

export default Input;
