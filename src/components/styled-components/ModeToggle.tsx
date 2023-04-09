import styled from 'styled-components';
import Sun from '../../assets/Sun';
import Moon from '../../assets/Moon';
import { useState } from 'react';

const ModeToggle = () => {
  const [toggle, setToggle] = useState(false);
  const onClickToggle = () => {
    setToggle(!toggle);
  };
  return (
    <StyledModeToggle className='ModeToggle' onClick={onClickToggle}>
      {toggle ? <Moon /> : <Sun />}
    </StyledModeToggle>
  );
};

const StyledModeToggle = styled.span`
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(0.8);
  }
`;
export default ModeToggle;
