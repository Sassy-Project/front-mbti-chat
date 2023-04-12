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
  ${(props) => (props.hasError ? '#bf0b0b' : null)};
  margin-bottom: 10px;
  font-size: 14px;

  &__error {
    font-size: 14px;
    color: #bf0b0b;
  }

  /* isFocused를 통해 불린값을 주게되면 focus색상을 선택할 수 있습니다. */
  &:focus {
    border-color: ${(props) => (props.isFocused ? '#68E4AA' : '#12BCFD')};
  }

  ${(props) =>
    props.type === 'number' &&
    `
  `}
`;

export default Input;
