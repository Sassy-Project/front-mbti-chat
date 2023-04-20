import { useNavigate } from 'react-router-dom';
import Button from '../../components/styled-components/Button';
import styles from './style.module.scss';
import ModeToggle from '../../components/styled-components/ModeToggle';
import DesktopLogo from '../../assets/TextLogo';
import ListIcon from '../../assets/ListIcon';
import { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../../Auth/useAuth';

const Header = () => {
  const navigate = useNavigate();
  const { token, logout } = useContext(TokenContext);
  const [userData, setUserData] = useState({
    id: '',
    nickname: '',
  });
  useEffect(() => {
    token &&
      setUserData({
        id: localStorage.getItem('id'),
        nickname: localStorage.getItem('nickname'),
      });
  }, [token]);

  return (
    <header className={styles.Header}>
      <section className={styles.Header__nav}>
        <button type='button' className={styles.Header__nav__logo} onClick={() => navigate('/')}>
          <DesktopLogo />
        </button>
        <div className={styles.Header__nav__ListIcon}>
          <ListIcon />
        </div>
        <div className={styles.Header__nav__right}>
          <ModeToggle />
          {token ? (
            <>
              <button type='button' onClick={() => navigate(`/users/${userData.id}`)}>
                정보수정하러가기
              </button>
              <span>-----</span>
              <button type='button' onClick={logout}>
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Button
                text='로그인'
                onClick={() => navigate('/login')}
                width='88px'
                height='40px'
                color='#000'
                background='#fff'
              />
              <Button
                text='회원가입'
                onClick={() => navigate('/signup')}
                width='94px'
                height='40px'
              />
            </>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
