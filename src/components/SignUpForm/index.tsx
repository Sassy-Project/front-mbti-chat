import BasicInput from '../styled-components/BasicInput';
import Button from '../styled-components/Button';
import { useState, useCallback, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import LabelBasicInput from '../LabelBasicInput';

const SignUpForm = () => {
  const [loginId, setLoginId] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mbti, setMbti] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [isValidLoginId, setIsValidLoginId] = useState<boolean>(false);
  const [isValidNickname, setIsValidNickname] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [isValidPasswordConfirm, setIsValidPasswordConfirm] = useState<boolean>(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);

  // Mbti Options
  const MBTI_OPTIONS = [
    { id: 1, value: 'INTJ' },
    { id: 2, value: 'INTP' },
    { id: 3, value: 'ENTJ' },
    { id: 4, value: 'ENTP' },
    { id: 5, value: 'INFJ' },
    { id: 6, value: 'INFP' },
    { id: 7, value: 'ENFJ' },
    { id: 8, value: 'ENFP' },
    { id: 9, value: 'ISTJ' },
    { id: 10, value: 'ISFJ' },
    { id: 11, value: 'ESTJ' },
    { id: 12, value: 'ESFJ' },
    { id: 13, value: 'ISTP' },
    { id: 14, value: 'ISFP' },
    { id: 15, value: 'ESTP' },
    { id: 16, value: 'ESFP' },
  ];

  // LoginId Focus : ref styled component ISSUE
  const loginIdFocus = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  // LoginId Change Event
  const onChangeLoginId = (e: SyntheticEvent<HTMLInputElement>) => {
    setLoginId(e.currentTarget.value);
    setIsValidLoginId(false);
  };

  // Nickname Change Event
  const onChangeNickname = (e: SyntheticEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
    setIsValidNickname(false);
  };

  // Password Change Event
  const onChangePassword = (e: SyntheticEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    setIsValidPassword(false);
  };

  // PasswordConfirm Change Event
  const onChangePasswordConfirm = (e: SyntheticEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.currentTarget.value);
    setIsValidPasswordConfirm(false);
  };

  // Email Change Event
  const onChangeEmail = (e: SyntheticEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    setIsValidEmail(false);
  };

  // Mbti Change Event
  const onChangeMbti = (e: SyntheticEvent<HTMLSelectElement>) => {
    setMbti(e.currentTarget.value);
  };

  // Gender Change Event
  const onChangeGender = (e: SyntheticEvent<HTMLSelectElement>) => {
    setGender(e.currentTarget.value);
  };

  // LoginId onBlur Event
  const onBlurLoginId = (e: SyntheticEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      setIsValidLoginId(true);
    }
  };

  // Nickname onBlur Event
  const onBlurNickname = (e: SyntheticEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      setIsValidNickname(true);
    }
  };

  // Password onBlure Event
  const onBlurPassword = (e: SyntheticEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      setIsValidPassword(true);
    }
  };

  // PasswordConfirm onBlur Event
  const onBlurPasswordConfirm = (e: SyntheticEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      setIsValidPasswordConfirm(true);
    }
  };

  // Email onBlur Event
  const onBlurEmail = (e: SyntheticEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      setIsValidEmail(true);
    }
  };

  // form sign up button
  const onClickEvent = () => {};

  return (
    <div className='SignUpForm'>
      <form>
        {/* ref styled component Issue */}
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
          placeholder='아이디를 입력해주세요.'
          isFocused
        />
        {/* <LabelBasicInput
          name='nickname'
          id='nickname'
          text='닉네임'
          value={nickname}
          onChange={onChangeNickname}
          onBlur={onBlurNickname}
          hasError={isValidNickname}
        />
        <BasicInput
          name='password'
          id='password'
          type='password'
          value={password}
          onChange={onChangePassword}
          onBlur={onBlurPassword}
          hasError={isValidPassword}
          isFocused={false}
          placeholder='최소 8자 이상 입력해주세요.'
        />
        <BasicInput
          name='passwordConfirm'
          id='passwordConfirm'
          type='password'
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
          onBlur={onBlurPasswordConfirm}
          hasError={isValidPasswordConfirm}
          isFocused={false}
          placeholder='비밀번호를 한번 더 입력해주세요.'
        />
        <BasicInput
          name='email'
          id='email'
          type='password'
          value={email}
          onChange={onChangeEmail}
          onBlur={onBlurEmail}
          hasError={isValidEmail}
          isFocused={false}
          placeholder='ex)email@naver.com'
        />
        <div className='BasicInput'>
          <label htmlFor='userMbti'>MBTI 선택</label>
          <select id='userMbti' onChange={onChangeMbti} value={mbti}>
            <option value=''>MBTI를 선택해주세요.</option>
            {MBTI_OPTIONS.map((option) => (
              <option key={option.id} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
          <span className='BasicInput__error'>MBTI를 선택해주세요.</span>
        </div>
        <div className='BasicInput'>
          <label htmlFor='userGender'>성별</label>
          <select id='userGender' onChange={onChangeGender} value={gender}>
            <option value=''>성별을 선택해주세요.</option>
            <option value='1'>남</option>
            <option value='2'>여</option>
          </select>
          <span className='BasicInput__error'>성별을 선택해주세요.</span>
        </div> */}
        <Button text='회원가입' onClick={onClickEvent} />
        <Link to='/login' className='SignUpForm__prev'>
          로그인
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
