import styled from 'styled-components';

const SymbolTextLogo = () => {
  return (
    <StyledLogo className='SymbolTextLogo'>
      <img src={`${process.env.PUBLIC_URL}/images/logo/symbol-text-logo.png`} alt='이미지' />
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  img {
    width: 108px;
    height: 30px;
  }
`;
export default SymbolTextLogo;
