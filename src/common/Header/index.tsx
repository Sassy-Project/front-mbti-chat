import { useNavigate } from 'react-router-dom';
import Button from '../../components/styled-components/Button';
import styles from './style.module.scss';
import ModeToggle from '../../components/styled-components/ModeToggle';
import DesktopLogo from '../../assets/TextLogo';
import API from '../../API/API';
import ListIcon from '../../assets/ListIcon';

const Header = () => {
  const navigate = useNavigate();
  const onApiCall = async () => {
    await API.test();
  };
  return (
    <header className={styles.Header}>
      {/* <button type='button' onClick={onApiCall}>
        API TEST
      </button> */}
      <section className={styles.Header__nav}>
        <div className={styles.Header__nav__logo}>
          <DesktopLogo />
        </div>
        <div className={styles.Header__nav__ListIcon}>
          <ListIcon />
        </div>
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
