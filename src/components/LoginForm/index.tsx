import Button from '../styled-components/Button';
import { useState, useCallback, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const LoginForm = () => {
  const PW_REQUIRE_CHECK = '비밀번호를 입력해주세요.';
  const PW_VALID_CHECK = '8자 이하로 입력해주세요.';

  // login ID, PW
  const [userId, setUserId] = useState<string>('');
  const [userPw, setUserPw] = useState<string>('');
  const [isValidId, setIsValidId] = useState<boolean>(false);
  const [isValidPw, setIsValidPw] = useState<boolean>(false);
  const [pwdMsg, setPwdMsg] = useState<string>('');

  // Id focus
  const userIdInput = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  // ID input Change Event
  const onChangeIdInput = (e: SyntheticEvent<HTMLInputElement>) => {
    setUserId(e.currentTarget.value);
    setIsValidId(false);
  };

  // PW input Change Event
  const onChangePwInput = (e: SyntheticEvent<HTMLInputElement>) => {
    setUserPw(e.currentTarget.value);
    setIsValidPw(false);
  };

  const onClickEvent = () => {
    // 회원가입 작업 이후 axios 구현 예정
    console.log('You clicked !');
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
    }

    if (userPw.length > 8) {
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
            value={userId}
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
            value={userPw}
            onChange={onChangePwInput}
            onBlur={onBlurPwInput}
            className={isValidPw ? 'BasicInput__error--input' : null}
            placeholder='비밀번호 8자 이하로 입력해주세요.'
          />
          {isValidPw ? <span className='BasicInput__error'>{pwdMsg}</span> : null}
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
