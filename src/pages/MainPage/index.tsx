import './style.scss';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate(); // test

  return (
    <div className='MainPage'>
      <button type='button' onClick={() => navigate('/login')}>
        [테스트] 로그인 페이지로 이동
      </button>
    </div>
  );
};

export default MainPage;
