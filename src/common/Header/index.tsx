import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../components/styled-components/Button';
import styles from './style.module.scss';
import ModeToggle from '../../components/styled-components/ModeToggle';
import DesktopLogo from '../../assets/TextLogo';
import ListIcon from '../../assets/ListIcon';
import SidebarLogin from '../../components/Sidebar/SidebarLogin';
import SidebarLogout from '../../components/Sidebar/SidebarLogout';

const Header = () => {
  const navigate = useNavigate();
  const [isLoginUser, setIsLoginUser] = useState(false);
  const localLength = localStorage.length;
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (localLength) {
      setIsLoginUser(true);
    } else {
      setIsLoginUser(false);
    }
  };

  return (
    <header className={styles.Header}>
      <section className={styles.Header__nav}>
        <button type='button' className={styles.Header__nav__logo} onClick={() => navigate('/')}>
          <DesktopLogo />
        </button>
        <button type='button' className={styles.Header__nav__ListIcon} onClick={() => toggleMenu()}>
          {!isOpen ? <ListIcon /> : ''}
          {isOpen && isLoginUser ? <SidebarLogin /> : ''}
          {isOpen && !isLoginUser ? <SidebarLogout /> : ''}
        </button>
        <div className={styles.Header__nav__right}>
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
