import Button from '../styled-components/Button';
import { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ID_REQUIRE_CHECK, PW_REQUIRE_CHECK } from '../../constants/message';
import LabelBasicInput from '../LabelBasicInput';
import styles from './style.module.scss';
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
  // inputs
  const [inputs, setInputs] = useState({
    loginId: '',
    password: '',
  });
  const { loginId, password } = inputs;
  // Valid
  const [isValidLoginId, setIsValidLoginId] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  // Error Message
  const [loginIdErrorMessage] = useState<string>(ID_REQUIRE_CHECK);
  const [passwordErrorMessage] = useState<string>(PW_REQUIRE_CHECK);

  // LoginId, password Change Event
  const onChange = useCallback(
    (e: { target: { name: string; value: string } }) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  // LoginId onBlur Event
  const onBlurLoginId = () => {
    if (!loginId) setIsValidLoginId(true);
    if (loginId) setIsValidLoginId(false);
  };

  // Password onBlure Event
  const onBlurPassword = () => {
    if (!password) setIsValidPassword(true);
    if (password) setIsValidPassword(false);
  };

  // Set localstorage
  const setLocalstorage = (response: AxiosResponse<UserData>) => {
    const { accessToken, accessTokenExpiresIn, id, nickname, refreshToken } = response.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('accessTokenExpiresIn', String(accessTokenExpiresIn));
    localStorage.setItem('id', String(id));
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('refreshToken', refreshToken);
  };

  // login action
  const onClickLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isValidLoginId === false && !loginId) {
      setIsValidLoginId(true);
      return;
    }
    if (isValidPassword === false && !password) {
      setIsValidPassword(true);
      return;
    }
    handleSubmit();
  };

  // handleSubmit
  const handleSubmit = async () => {
    const data = { loginId, password };
    const response = await API.logIn(data);
    setLocalstorage(response);
    navigate('/');
  };

  return (
    <div className={styles.LoginForm}>
      <form>
        <LabelBasicInput
          label='loginId'
          text='아이디'
          name='loginId'
          id='loginId'
          type='text'
          value={loginId}
          onChange={onChange}
          onBlur={onBlurLoginId}
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
          onChange={onChange}
          onBlur={onBlurPassword}
          hasError={isValidPassword}
          placeholder={PW_REQUIRE_CHECK}
          errorMessage={passwordErrorMessage}
        />
        <Button text='로그인' onClick={onClickLogin} />
        <div className={styles.support}>
          <Link to='/findid' style={{ textDecoration: 'none' }}>
            아이디 찾기
          </Link>
          <Link to='/findpw' style={{ textDecoration: 'none' }}>
            비밀번호 찾기
          </Link>
          <Link to='/signup' style={{ textDecoration: 'none' }}>
            회원가입 하기
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
