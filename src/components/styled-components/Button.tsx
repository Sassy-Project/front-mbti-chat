import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: string;
}

const Button = ({ text, onClick, color }: ButtonProps) => {
  // eslint-disable-next-line no-console
  console.log(color);
  return (
    <StyledButton onClick={onClick} color={color}>
      {text}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'var(--color-btn)',
};

const StyledButton = styled.button`
  /*공통 스타일*/
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /*크기*/
  width: 100%;
  height: 48px;
  font-size: 1rem;

  /*색상 */
  background: ${(props) => props.color};
  &:hover {
    filter: brightness(0.8);
  }
`;
export default Button;
