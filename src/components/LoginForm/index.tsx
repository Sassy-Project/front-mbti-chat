import Button from '../styled-components/Button';
import { useState, SyntheticEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ID_REQUIRE_CHECK, PW_REQUIRE_CHECK, PW_VALID_CHECK } from '../../constants/message';
import LabelBasicInput from '../LabelBasicInput';
import './style.scss';
import API from '../../API/API';
import { AxiosResponse } from 'axios';

interface UserData {
  accessToken: string;
  accessTokenExpiresIn: number;
  id: number;
  nickname: string;
  refreshToken: string;
}

const LoginForm = () => {
  // hooks
  const navigate = useNavigate();
  // login ID, PW
  const [loginId, setLoginId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // Valid
  const [isValidLoginId, setIsValidLoginId] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  // Error Message
  const [loginIdErrorMessage] = useState<string>(ID_REQUIRE_CHECK); // 추후 중복확인 체크 작업 진행
  const [passwordErrorMessage] = useState<string>(PW_REQUIRE_CHECK);

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

  // // LoginId onBlur Event
  // const onBlurLoginId = () => {
  //   if (!loginId) {
  //     setIsValidLoginId(true);
  //   }
  // };

  // // Password onBlure Event
  // const onBlurPassword = () => {
  //   if (!password) {
  //     setIsValidPassword(true);
  //     setPasswordErrorMessage(PW_REQUIRE_CHECK);
  //     return;
  //   }

  //   if (password.length < 8) {
  //     setIsValidPassword(true);
  //     setPasswordErrorMessage(PW_VALID_CHECK);
  //   }
  // };

  // Set localstorage
  const setLocalstorage = (response: AxiosResponse<UserData>) => {
    const { accessToken, accessTokenExpiresIn, id, nickname, refreshToken } = response.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('accessTokenExpiresIn', String(accessTokenExpiresIn));
    localStorage.setItem('id', String(id));
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('refreshToken', refreshToken);
  };

  // API
  const handleLoginClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isValidLoginId === false && !loginId) {
      setIsValidLoginId(true);
    } else if (isValidPassword === false && !password) {
      setIsValidPassword(true);
    } else {
      const data = { loginId, password };
      const response = await API.logIn(data);
      setLocalstorage(response);
      navigate('/');
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
          // onBlur={onBlurLoginId}
          hasError={isValidLoginId}
          placeholder={ID_REQUIRE_CHECK}
          errorMessage={loginIdErrorMessage}
        />
        <LabelBasicInput
          label='password'
          text='비밀번호'
          name='password'
          id='password'
          type='password'
          value={password}
          onChange={onChangePassword}
          // onBlur={onBlurPassword}
          hasError={isValidPassword}
          placeholder={PW_VALID_CHECK}
          errorMessage={passwordErrorMessage}
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
