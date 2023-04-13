import styled from 'styled-components';

interface InputProps {
  type?: string;
}

const Label = styled.label<InputProps>`
  margin-bottom: 10px;
  font-size: 16px;
`;

export default Label;
