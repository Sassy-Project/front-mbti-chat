import { useNavigate } from 'react-router-dom';
import Button from '../../components/styled-components/Button';
import './style.scss';
import ModeToggle from '../../components/styled-components/ModeToggle';
import DesktopLogo from '../../assets/TextLogo';
import API from '../../API/API';

const Header = () => {
  const navigate = useNavigate();
  const onApiCall = async () => {
    await API.test();
  };
  return (
    <header className='Header'>
      <button type='button' onClick={onApiCall}>
        API TEST
      </button>
      <section className='Header__nav'>
        <div className='Header__nav--logo'>
          <DesktopLogo />
        </div>
        <div className='Header__nav--right'>
          <ModeToggle />
          <Button
            text='로그인'
            onClick={() => navigate('/login')}
            width='88px'
            height='40px'
            color='#000'
            background='#fff'
          />
          <Button text='회원가입' onClick={() => navigate('/signup')} width='94px' height='40px' />
        </div>
      </section>
    </header>
  );
};

export default Header;
