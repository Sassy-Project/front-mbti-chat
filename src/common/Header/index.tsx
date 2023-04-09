import { useNavigate } from 'react-router-dom';
import Button from '../../components/styled-components/Button';
import './style.scss';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className='Header'>
      <section className='Header__nav'>
        <div className='Header__nav--logo'>Logo</div>
        <div className='Header__nav--right'>
          <Button
            text='로그인'
            onClick={() => navigate('/login')}
            width='88px'
            height='40px'
            color='#000'
            background='#fff'
          />
          <Button text='회원가입' onClick={() => navigate('/signup')} width='88px' height='40px' />
        </div>
      </section>
    </header>
  );
};

export default Header;
