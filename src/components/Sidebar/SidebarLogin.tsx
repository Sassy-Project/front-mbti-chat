import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

const SidebarLogin = () => {
  // 사용자 추가 수정 중
  // 마이페이지 링크연결 수정 중
  return (
    <div className={styles.SidebarLogin}>
      <div className={styles.SidebarLogin__CloseIcon}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
        </svg>
        <path
          fillRule='evenodd'
          d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
        />
      </div>
      <ul className={styles.SidebarLogin__content}>
        <li className={styles.SidebarLogin__content__username}>사용자 고객님</li>
        <li className={styles.SidebarLogin__content__hi}>안녕하세요</li>
        <li className={styles.SidebarLogin__content__mypage}>
          <Link to='/'>마이페이지</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarLogin;
