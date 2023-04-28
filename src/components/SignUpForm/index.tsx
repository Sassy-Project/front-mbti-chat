import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ID_REQUIRE_CHECK,
  ID_OVERLAP_CHECK,
  NICKNAME_REQUIRE_CHECK,
  PW_REQUIRE_CHECK,
  PW_VALID_CHECK,
  PWCONFIRM_REQUIRE_CHECK,
  PWCONFIRM_VALID_CHECK,
  EMAIL_REQUIRE_CHECK,
  MBTI_REQUIRE_CHECK,
} from '../../constants/message';
import LabelBasicInput from '../LabelBasicInput';
import LabelBasicSelect from '../LabelBasicSelect';
import Button from '../styled-components/Button';
import API from '../../API/API';
import styles from './style.module.scss';

// mbti Select option
const mbtiList = [
  '선택해주세요',
  'ESTP',
  'ESFP',
  'ENFP',
  'ENTP',
  'ESTJ',
  'ESFJ',
  'ENFJ',
  'ENTJ',
  'ISTJ',
  'ISFJ',
  'INFJ',
  'INTJ',
  'ISTP',
  'ISFP',
  'INFP',
  'INTP',
];

// gender Select option
const genderList = ['남', '여'];

const SignUpForm = () => {
  const [loginId, setLoginId] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mbti, setMbti] = useState<string>(mbtiList[0]);
  const [gender, setGender] = useState<string>(genderList[0]);
  // Valid
  const [isValidLoginId, setIsValidLoginId] = useState<boolean>(false);
  const [isValidNickname, setIsValidNickname] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [isValidPasswordConfirm, setIsValidPasswordConfirm] = useState<boolean>(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidMbti, setIsValidMbti] = useState<boolean>(false);
  // Error Message
  const [loginIdErrorMessage, setLoginIdErrorMessage] = useState<string>(ID_REQUIRE_CHECK);
  const [nicknameErrorMessage] = useState<string>(NICKNAME_REQUIRE_CHECK);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>(PW_REQUIRE_CHECK);
  const [passwordConfirmErrorMessage, setPasswordConfirmErrorMessage] =
    useState<string>(PWCONFIRM_REQUIRE_CHECK);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>(EMAIL_REQUIRE_CHECK);
  const [mbtiErrorMessage] = useState<string>(MBTI_REQUIRE_CHECK);

  // LoginId onChange Event
  const onChangeLoginId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.currentTarget.value);
    setIsValidLoginId(false);
  };

  // LoginId useEffect
  useEffect(() => {
    if (loginId) {
      const data = { loginId };
      const response = API.checkId(data);
      response
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          setIsValidLoginId(true);
          setLoginIdErrorMessage(ID_OVERLAP_CHECK);
        });
    }
  }, [loginId]);

  // Nickname onChange Event
  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
    setIsValidNickname(false);
  };

  // Password onChange Event
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    setIsValidPassword(false);
  };

  // PasswordConfirm onChange Event
  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.currentTarget.value);
    setIsValidPasswordConfirm(false);
  };

  // Email onChange Event
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    setIsValidEmail(false);
  };

  // Email useEffect
  useEffect(() => {
    if (email) {
      const data = { email };
      const response = API.checkEmail(data);
      response
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(`성공이메일: + ${res}`);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          setIsValidEmail(true);
          setEmailErrorMessage(error.response.data.message);
        });
    }
  }, [email]);

  // Mbti onChange Event select
  const onChangeMbti = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMbti(e.currentTarget.value);
    if (e.currentTarget.value !== '1') {
      setIsValidMbti(false);
    }
  };

  // Gender onChange Event select
  const onChangeGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.currentTarget.value);
  };

  // LoginId onBlur Event
  const onBlurLoginId = () => {
    if (!loginId) {
      setIsValidLoginId(true);
      setLoginIdErrorMessage(ID_REQUIRE_CHECK);
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
    if (password.length < 8) {
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
    }

    // 이메일 유효성 검사
    // if (!regEmail.test(email)) {
    //   setIsValidEmail(true);
    //   setEmailErrorMessage(EMAIL_VALID_CHECK);
    // }
  };

  // MBTI onBlur Event
  const onBlurMbti = () => {
    if (mbti === mbtiList[0]) {
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
      (isValidPasswordConfirm === false && !passwordConfirm) ||
      password !== passwordConfirm
    ) {
      setIsValidPasswordConfirm(true);
    } else if (isValidEmail === false && !email) {
      setIsValidEmail(true);
    } else if (isValidMbti === false && mbti === mbtiList[0]) {
      setIsValidMbti(true);
    } else {
      // Sign up API
      // eslint-disable-next-line no-console
      console.log('회원가입 성공 or 실패');
      onSignUpHandler();
    }
  };
  // 회원가입 api
  const onSignUpHandler = () => {
    const data = {
      loginId,
      nickname,
      password,
      email,
      mbti,
      gender,
    };
    const response = API.signUp(data);
    response
      .then((res) => {
        if (res.data.code === 'SignUp') {
          // eslint-disable-next-line no-alert
          alert('회원가입이 완료되었습니다.');
          window.location.replace('/login');
        }
      })
      .catch((error) => {
        if (error.code === 'ERR_BAD_REQUEST') {
          error.message = '회원가입에 실패하였습니다.';
          // eslint-disable-next-line no-alert
          alert(error.message);
        }
      });
  };

  return (
    <div className={styles.SignUpForm}>
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
        />
        <LabelBasicSelect
          label='mbti'
          text='MBTI'
          name='mbti'
          id='mbti'
          options={mbtiList}
          value={mbti}
          onChange={onChangeMbti}
          onBlur={onBlurMbti}
          hasError={isValidMbti}
          errorMessage={mbtiErrorMessage}
        />
        <LabelBasicSelect
          label='gender'
          text='성별'
          name='gender'
          id='gender'
          options={genderList}
          value={gender}
          onChange={onChangeGender}
        />

        <div className={styles.signup__btn}>
          <Button text='회원가입' onClick={handleLastCheckClick} />
          <Link to='/login' className={styles.signup__btn__prev}>
            로그인
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
