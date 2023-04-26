/* eslint-disable import/no-duplicates */
import { useNavigate } from 'react-router-dom';
// import Button from '../../components/styled-components/Button';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';

const HeaderToggle = () => {
  const navigate = useNavigate();
  const userNickname = localStorage.getItem('nickname');
  const logout = () => {
    localStorage.clear();
    // eslint-disable-next-line no-alert
    alert('로그아웃 되었습니다');
    navigate('/');
    window.location.reload();
  };
  return (
    <div className={styles.HeaderToggle}>
      <div className={styles.HeaderToggle__box}>
        <div className={styles.HeaderToggle__box__username}>{userNickname} 님</div>
        <div className={styles.HeaderToggle__box__mypage}>
          <Link to='/users/:userId' style={{ textDecoration: 'none' }}>
            마이페이지
          </Link>
        </div>
      </div>
      <div className={styles.HeaderToggle__logout} onClick={logout} role='presentation'>
        로그아웃
      </div>
    </div>
  );
};

export default HeaderToggle;
