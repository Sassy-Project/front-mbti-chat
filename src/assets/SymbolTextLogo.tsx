import styled from 'styled-components';

const SymbolTextLogo = () => {
  return (
    <StyledLogo className='SymbolTextLogo'>
      <img src={`${process.env.PUBLIC_URL}/images/logo/symbol-text-logo.png`} alt='이미지' />
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  cursor: pointer;
  img {
    width: 162px;
    height: 45px;
    filter: grayscale(100%);
  }
`;
export default SymbolTextLogo;
