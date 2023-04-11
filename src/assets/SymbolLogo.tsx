import styled from 'styled-components';

const SymbolLogo = () => {
  return (
    <StyledLogo className='SymbolLogo'>
      <img src={`${process.env.PUBLIC_URL}/images/logo/symbol-logo.png`} alt='이미지' />
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  img {
    width: 54px;
    height: 54px;
  }
`;
export default SymbolLogo;
