import Button from '../../components/styled-components/Button';
import './style.scss';

const Header = () => {
  return (
    <header className='Header'>
      <section className='Header__nav'>
        <div className='Header__nav--logo'>Logo</div>
        <div className='Header__nav--right'>
          <Button
            text='로그인'
            onClick={() => console.log()}
            width='88px'
            height='40px'
            color='#000'
            background='#fff'
          />
          <Button text='회원가입' onClick={() => console.log()} width='88px' height='40px' />
        </div>
      </section>
    </header>
  );
};

export default Header;
