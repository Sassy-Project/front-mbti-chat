import styled from 'styled-components';
import Sun from '../../assets/Sun';
import Moon from '../../assets/Moon';
import { useEffect, useState } from 'react';

const ModeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const onClickToggle = () => {
    setIsLightMode(!isLightMode);
  };
  useEffect(() => {
    isLightMode
      ? document.documentElement.setAttribute('data-theme', 'light')
      : document.documentElement.setAttribute('data-theme', 'dark');
  }, [isLightMode]);
  return (
    <StyledModeToggle className='ModeToggle' onClick={onClickToggle}>
      {isLightMode ? <Moon /> : <Sun />}
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
