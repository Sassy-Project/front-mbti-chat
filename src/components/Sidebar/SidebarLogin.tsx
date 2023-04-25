import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import CloseIcon from '../../assets/CloseIcon';

const SidebarLogin = () => {
  const userNickname = localStorage.getItem('nickname');

  const logout = () => {
    localStorage.clear();
    // eslint-disable-next-line no-alert
    alert('로그아웃 되었습니다');
    window.location.reload();
  };

  return (
    <>
      <div className={styles.Sidebar__background} />
      <div className={styles.Sidebar}>
        <div className={styles.Sidebar__CloseIcon}>
          <CloseIcon />
        </div>
        <ul className={styles.Sidebar__content}>
          <li className={styles.Sidebar__content__letter1}>
            <Link to='/users/:userId' style={{ textDecoration: 'none' }}>
              {userNickname} 고객님
            </Link>
          </li>
          <li className={styles.Sidebar__content__letter2}>안녕하세요</li>
          <li className={styles.Sidebar__content__line}>
            <hr />
          </li>
          <li className={styles.Sidebar__content__letter3}>
            <Link to='/users/:userId' style={{ textDecoration: 'none' }}>
              마이페이지
            </Link>
          </li>
          <button type='button' className={styles.Sidebar__content__letter3} onClick={logout}>
            <Link to='/' style={{ textDecoration: 'none' }}>
              로그아웃
            </Link>
          </button>
        </ul>
      </div>
    </>
  );
};

export default SidebarLogin;
