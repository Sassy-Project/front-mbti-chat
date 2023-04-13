import Button from '../styled-components/Button';
import { useState, useCallback, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import API from '../../API/API';

const LoginForm = () => {
  const PW_REQUIRE_CHECK = '비밀번호를 입력해주세요.';
  const PW_VALID_CHECK = '최소 8자 이상 입력해주세요.';

  // login ID, PW
  const [loginId, setLoginId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValidId, setIsValidId] = useState<boolean>(false);
  const [isValidPw, setIsValidPw] = useState<boolean>(false);
  const [pwdMsg, setPwdMsg] = useState<string>('');

  // API
  const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const data = { loginId, password };
    API.logIn(data);
  };

  // Id focus
  const userIdInput = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  // ID input Change Event
  const onChangeIdInput = (e: SyntheticEvent<HTMLInputElement>) => {
    setLoginId(e.currentTarget.value);
    setIsValidId(false);
  };

  // PW input Change Event
  const onChangePwInput = (e: SyntheticEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    setIsValidPw(false);
  };

  // userID focus out
  const onBlurIdInput = (e: SyntheticEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      setIsValidId(true);
    }
  };

  // userID focus out
  const onBlurPwInput = (e: SyntheticEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      // Pw empty
      setPwdMsg(PW_REQUIRE_CHECK);
      setIsValidPw(true);
      return;
    }

    if (password.length <= 8) {
      setPwdMsg(PW_VALID_CHECK);
      setIsValidPw(true);
    }
  };

  return (
    <div className='LoginForm'>
      <form>
        <div className='BasicInput'>
          <label htmlFor='userId'>아이디</label>
          <input
            name='userId'
            id='userId'
            type='text'
            value={loginId}
            onChange={onChangeIdInput}
            onBlur={onBlurIdInput}
            ref={userIdInput}
            className={isValidId ? 'BasicInput__error--input' : null}
            placeholder='아이디를 입력해주세요.'
          />
          {isValidId ? <span className='BasicInput__error'>아이디를 입력해주세요.</span> : null}
        </div>
        <div className='BasicInput'>
          <label htmlFor='userPw'>패스워드</label>
          <input
            name='userPw'
            id='userPw'
            type='password'
            minLength={8}
            value={password}
            onChange={onChangePwInput}
            onBlur={onBlurPwInput}
            className={isValidPw ? 'BasicInput__error--input' : null}
            placeholder='비밀번호 8자 이하로 입력해주세요.'
          />
          {isValidPw ? <span className='BasicInput__error'>{pwdMsg}</span> : null}
        </div>
        <Button text='로그인' onClick={handleLoginClick} />
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
