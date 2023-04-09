import Button from '../styled-components/Button';
import { Link } from 'react-router-dom';
import './style.scss';

const LoginForm = () => {
  const onClickEvent = () => {
    // eslint-disable-next-line no-console
    console.log('You clicked !');
  };
  return (
    <div className='LoginForm'>
      <form>
        <div className='BasicInput'>
          <label htmlFor='loginId'>아이디</label>
          <input id='loginId' type='text' placeholder='아이디를 입력해주세요.' />
          {true && <span className='BasicInput__error'>아이디를 확인해주세요.</span>}
        </div>
        <div className='BasicInput'>
          <label htmlFor='loginPw'>패스워드</label>
          <input id='loginPw' type='text' placeholder='비밀번호 8자 이하로 입력해주세요.' />
          {true && <span className='BasicInput__error'>패스워드를 확인해주세요.</span>}
        </div>
        <Button text='로그인' onClick={onClickEvent} />
        <div className='LoginSupport'>
          <Link to='/login' style={{ textDecoration: 'none' }}>
            비밀번호 찾기
          </Link>
          <Link to='/login' style={{ textDecoration: 'none' }}>
            회원가입 하기
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
