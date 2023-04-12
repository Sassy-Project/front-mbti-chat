import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface InputProps {
  hasError?: boolean;
  isFocused?: boolean;
  type?: string;
}

const Input = styled.input<InputProps>`
  input {
    height: 48px;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    font-size: 14px;
    &.BasicInput__error--input {
      border: 1px solid #bf0b0b;
    }
  }

  &__error {
    font-size: 14px;
    color: #bf0b0b;
  }

  ${(props) =>
    props.type === 'number' &&
    `
    /* Add specific styles for number input */
  `}
`;

export default Input;
