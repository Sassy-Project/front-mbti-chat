import { useState, useCallback, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  ID_REQUIRE_CHECK,
  NICKNAME_REQUIRE_CHECK,
  PW_REQUIRE_CHECK,
  PW_VALID_CHECK,
  PWCONFIRM_REQUIRE_CHECK,
  PWCONFIRM_VALID_CHECK,
  EMAIL_REQUIRE_CHECK,
  EMAIL_VALID_CHECK,
  MBTI_REQUIRE_CHECK,
} from '../../constants/message';
import { regEmail } from '../../constants/regEx';
import LabelBasicInput from '../LabelBasicInput';
import LabelBasicSelect from '../LabelBasicSelect';
import Button from '../styled-components/Button';
import './style.scss';

// Mbti select option interface
interface Mbti {
  id: string;
  name: string;
}

// Gender select option interface
interface Gender {
  id: string;
  name: string;
}

const SignUpForm = () => {
  const [loginId, setLoginId] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mbti, setMbti] = useState<string>('1');
  const [gender, setGender] = useState<string>('1');
  // Valid
  const [isValidLoginId, setIsValidLoginId] = useState<boolean>(false);
  const [isValidNickname, setIsValidNickname] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [isValidPasswordConfirm, setIsValidPasswordConfirm] = useState<boolean>(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidMbti, setIsValidMbti] = useState<boolean>(false);
  // Error Message
  const [loginIdErrorMessage, setLoginIdErrorMessage] = useState<string>(ID_REQUIRE_CHECK); // 추후 아이디 중복 체크시 에러메시지 useState
  const [nicknameErrorMessage, setNickNameErrorMessage] = useState<string>(NICKNAME_REQUIRE_CHECK);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>(PW_REQUIRE_CHECK);
  const [passwordConfirmErrorMessage, setPasswordConfirmErrorMessage] =
    useState<string>(PWCONFIRM_REQUIRE_CHECK);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>(EMAIL_REQUIRE_CHECK);
  const [mbtiErrorMessage, setMbtiErrorMessage] = useState<string>(MBTI_REQUIRE_CHECK);

  // MBTI select option
  const mbtis: Mbti[] = [
    { id: '1', name: '선택하세요' },
    { id: '2', name: 'INFJ' },
  ];

  // Gender select option
  const genders: Gender[] = [
    { id: '1', name: '남' },
    { id: '2', name: '여' },
  ];

  // LoginId Focus : ref styled component ISSUE
  // const loginIdFocus = useCallback((inputElement) => {
  //   if (inputElement) {
  //     inputElement.focus();
  //   }
  // }, []);

  // LoginId Change Event
  const onChangeLoginId = (e: SyntheticEvent<HTMLInputElement>) => {
    setLoginId(e.currentTarget.value);
    setIsValidLoginId(false);
    // console.log(`onChange :${isValidLoginId}`);
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
    if (e.currentTarget.value !== '1') {
      setIsValidMbti(false);
    }
  };

  // Gender Change Event
  const onChangeGender = (e: SyntheticEvent<HTMLSelectElement>) => {
    setGender(e.currentTarget.value);
  };

  // LoginId onBlur Event
  const onBlurLoginId = () => {
    if (!loginId) {
      setIsValidLoginId(true);
    }
  };

  // Nickname onBlur Event
  const onBlurNickname = () => {
    if (!nickname) {
      setIsValidNickname(true);
    }
  };

  // Password onBlure Event
  const onBlurPassword = () => {
    if (!password) {
      setIsValidPassword(true);
      setPasswordErrorMessage(PW_REQUIRE_CHECK);
      return;
    }

    if (password.length <= 8) {
      setIsValidPassword(true);
      setPasswordErrorMessage(PW_VALID_CHECK);
    }
  };

  // PasswordConfirm onBlur Event
  const onBlurPasswordConfirm = () => {
    if (!passwordConfirm) {
      setIsValidPasswordConfirm(true);
      setPasswordConfirmErrorMessage(PWCONFIRM_REQUIRE_CHECK);
      return;
    }

    // 비밀번호가 일치하지 않다면
    if (password !== passwordConfirm) {
      setIsValidPasswordConfirm(true);
      setPasswordConfirmErrorMessage(PWCONFIRM_VALID_CHECK);
    }
  };

  // Email onBlur Event
  const onBlurEmail = () => {
    if (!email) {
      setIsValidEmail(true);
      setEmailErrorMessage(EMAIL_REQUIRE_CHECK);
      return;
    }

    // 이메일 유효성 검사
    if (!regEmail.test(email)) {
      setIsValidEmail(true);
      setEmailErrorMessage(EMAIL_VALID_CHECK);
    }
  };

  // MBTI onBlur Event
  const onBlurMbti = () => {
    if (mbti === '1') {
      setIsValidMbti(true);
    }
  };

  // form sign up Check button
  const handleLastCheckClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (isValidLoginId === false && !loginId) {
      setIsValidLoginId(true);
    } else if (isValidNickname === false && !nickname) {
      setIsValidNickname(true);
    } else if (isValidPassword === false && !password) {
      setIsValidPassword(true);
    } else if (
      isValidPasswordConfirm === false &&
      !passwordConfirm &&
      password !== passwordConfirm
    ) {
      setIsValidPasswordConfirm(true);
    } else if (isValidEmail === false && !email) {
      setIsValidEmail(true);
    } else if (isValidMbti === false && mbti === '1') {
      setIsValidMbti(true);
    } else {
      // 회원가입 버튼 눌렀을때
      // 콘솔 value
      console.log(
        `로그인아이디 : ${loginId}
        닉네임:${nickname}
        패스워드:${password}
        패스워드확인:${passwordConfirm}
        이메일:${email}
        mbti:${mbti} 
        gender:${gender}`
      );
    }
  };

  // form API submit

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
          placeholder={ID_REQUIRE_CHECK}
          errorMessage={loginIdErrorMessage}
          isFocused
        />
        <LabelBasicInput
          label='nickname'
          text='닉네임'
          name='nickname'
          id='nickname'
          type='text'
          value={nickname}
          onChange={onChangeNickname}
          onBlur={onBlurNickname}
          hasError={isValidNickname}
          placeholder={NICKNAME_REQUIRE_CHECK}
          errorMessage={nicknameErrorMessage}
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
        <LabelBasicInput
          label='passwordConfirm'
          text='비밀번호 재확인'
          name='passwordConfirm'
          id='passwordConfirm'
          type='password'
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
          onBlur={onBlurPasswordConfirm}
          hasError={isValidPasswordConfirm}
          placeholder={PWCONFIRM_REQUIRE_CHECK}
          errorMessage={passwordConfirmErrorMessage}
          isFocused
        />
        <LabelBasicInput
          label='email'
          text='이메일'
          name='email'
          id='email'
          type='email'
          value={email}
          onChange={onChangeEmail}
          onBlur={onBlurEmail}
          hasError={isValidEmail}
          placeholder='ex)email@naver.com'
          errorMessage={emailErrorMessage}
          isFocused
        />
        <LabelBasicSelect
          text='MBTI'
          options={mbtis.map((mbtiItem) => ({ value: mbtiItem.id, label: mbtiItem.name }))}
          value={mbti}
          onChange={onChangeMbti}
          onBlur={onBlurMbti}
          hasError={isValidMbti}
          errorMessage={mbtiErrorMessage}
        />
        <LabelBasicSelect
          text='성별'
          options={genders.map((genderItem) => ({ value: genderItem.id, label: genderItem.name }))}
          value={gender}
          onChange={onChangeGender}
        />
        <Button text='회원가입' onClick={handleLastCheckClick} />
        <Link to='/login' className='SignUpForm__prev'>
          로그인
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
