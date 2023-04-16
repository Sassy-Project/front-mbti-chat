import Button from '../styled-components/Button';
import { useState, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { ID_REQUIRE_CHECK, PW_REQUIRE_CHECK, PW_VALID_CHECK } from '../../constants/message';
import LabelBasicInput from '../LabelBasicInput';
import './style.scss';
import API from '../../API/API';

const LoginForm = () => {
  // login ID, PW
  const [loginId, setLoginId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // Valid
  const [isValidLoginId, setIsValidLoginId] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  // Error Message
  const [loginIdErrorMessage, setLoginIdErrorMessage] = useState<string>(ID_REQUIRE_CHECK); // 추후 중복확인 체크 작업 진행
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>(PW_REQUIRE_CHECK);

  // LoginId Change Event
  const onChangeLoginId = (e: SyntheticEvent<HTMLInputElement>) => {
    setLoginId(e.currentTarget.value);
    setIsValidLoginId(false);
  };

  // Password Change Event
  const onChangePassword = (e: SyntheticEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    setIsValidPassword(false);
  };

  // LoginId onBlur Event
  const onBlurLoginId = () => {
    if (!loginId) {
      setIsValidLoginId(true);
    }
  };

  // Password onBlure Event
  const onBlurPassword = () => {
    if (!password) {
      setIsValidPassword(true);
      setPasswordErrorMessage(PW_REQUIRE_CHECK);
      return;
    }

    if (password.length < 8) {
      setIsValidPassword(true);
      setPasswordErrorMessage(PW_VALID_CHECK);
    }
  };

  // API
  const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (isValidLoginId === false && !loginId) {
      setIsValidLoginId(true);
    } else if (isValidPassword === false && !password) {
      setIsValidPassword(true);
    } else {
      const data = { loginId, password };
      const response = API.logIn(data);
      response
        .then((res) => {
          if (res.status === 200) {
            alert(`${res.data.nickname}님 환영합니다.`);
          }
        })
        .catch((error) => {
          if (error.code === 'ERR_BAD_REQUEST') {
            error.message = '아이디/패스워드를 확인해주세요';
            alert(error.message);
          }
        });
    }
  };

  return (
    <div className='LoginForm'>
      <form>
        <LabelBasicInput
          label='loginId'
          text='아이디'
          name='loginId'
          id='loginId'
          type='text'
          value={loginId}
          onChange={onChangeLoginId}
          onBlur={onBlurLoginId}
          hasError={isValidLoginId}
          placeholder={ID_REQUIRE_CHECK}
          errorMessage={loginIdErrorMessage}
          isFocused
        />
        <LabelBasicInput
          label='password'
          text='비밀번호'
          name='password'
          id='password'
          type='password'
          value={password}
          onChange={onChangePassword}
          onBlur={onBlurPassword}
          hasError={isValidPassword}
          placeholder={PW_VALID_CHECK}
          errorMessage={passwordErrorMessage}
          isFocused
        />
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
