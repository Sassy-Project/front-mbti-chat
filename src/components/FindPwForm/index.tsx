import { useCallback, useEffect, useState } from 'react';
import LabelBasicInput from '../LabelBasicInput';
import {
  EMAIL_REQUIRE_CHECK,
  EMAIL_VALID_CHECK,
  CODE_REQUIRE_CHECK,
  ID_REQUIRE_CHECK,
} from '../../constants/message';
import styles from './style.module.scss';
import Button from '../styled-components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { regEmail } from '../../constants/regEx';
import API from '../../API/API';
import Loading from '../../assets/Loading';

const FindPwForm = () => {
  const [inputs, setInputs] = useState({
    email: '',
    code: '',
    loginId: '',
  });
  const { email, code, loginId } = inputs;
  const [userId, setUserId] = useState<number>(0);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidCode, setIsValidCode] = useState<boolean>(false);
  const [isValidLoginId, setIsValidLoginId] = useState<boolean>(false);
  const [isFlag, setIsFlag] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>(EMAIL_REQUIRE_CHECK);
  const [codeErrorMessage, setCodeErrorMessage] = useState<string>(CODE_REQUIRE_CHECK);
  const [loginIdErrorMessage] = useState<string>(ID_REQUIRE_CHECK);
  const navigate = useNavigate();

  const onChange = useCallback(
    (e: { target: { name: any; value: any } }) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onBlurEmail = (e: React.FocusEvent<HTMLElement>) => {
    if (!email) {
      setIsValidEmail(true);
      setEmailErrorMessage(EMAIL_REQUIRE_CHECK);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onBlurCode = (e: React.FocusEvent<HTMLElement>) => {
    if (!code) {
      setIsValidCode(true);
      setCodeErrorMessage(CODE_REQUIRE_CHECK);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onBlurLoginId = (e: React.FocusEvent<HTMLElement>) => {
    if (!loginId) {
      setIsValidLoginId(true);
      setCodeErrorMessage(ID_REQUIRE_CHECK);
    }
  };

  const FindPwBtnAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email) {
      setIsValidEmail(true);
      setEmailErrorMessage(EMAIL_REQUIRE_CHECK);
    }

    if (!isValidEmail && email && !isFlag) {
      setIsLoading(true);
      checkEmailApi();
    }

    if (!code) {
      setIsValidCode(true);
    }

    if (!loginId) {
      setIsValidLoginId(true);
    }

    if (email && code && loginId) {
      findIdSubmit();
    }
  };

  const checkEmailApi = async () => {
    await API.checkEmailCode({ email });
    checkEmailHandler();
  };

  const checkEmailHandler = () => {
    setIsLoading(false);
    setIsFlag(true);
    setInputs({
      ...inputs,
      code: '',
      loginId: '',
    });
  };

  const findIdSubmit = async () => {
    const data = { code, email, loginId };
    try {
      const response = await API.findPassword(data);
      // eslint-disable-next-line no-console
      setUserId(response.data.userId);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('아이디 또는 이메일/인증번호를 확인해주세요.');
    }
  };

  useEffect(() => {
    if (email && !regEmail.test(email)) {
      setIsValidEmail(true);
      setEmailErrorMessage(EMAIL_VALID_CHECK);
    } else {
      setIsValidEmail(false);
    }
    if (email) {
      setIsFlag(false);
    }
  }, [email]);

  useEffect(() => {
    if (code) {
      setIsValidCode(false);
    }
  }, [code]);

  useEffect(() => {
    if (loginId) {
      setIsValidLoginId(false);
    }
  }, [loginId]);

  useEffect(() => {
    if (userId) {
      navigate('/findnewpw', { state: { userId } });
    }
  }, [userId, navigate]);

  return (
    <div className={styles.FindPwForm}>
      <h2>비밀번호 찾기</h2>
      <form>
        <LabelBasicInput
          label='email'
          text='이메일'
          name='email'
          id='email'
          type='text'
          value={email}
          onChange={onChange}
          onBlur={onBlurEmail}
          hasError={isValidEmail}
          placeholder='ex)email@naver.com'
          errorMessage={emailErrorMessage}
        />
        {isLoading && (
          <div className={styles.findpw__loading}>
            <Loading />
          </div>
        )}
        {isFlag && (
          <>
            <LabelBasicInput
              label='code'
              text='인증코드'
              name='code'
              id='code'
              type='text'
              value={code}
              onChange={onChange}
              onBlur={onBlurCode}
              hasError={isValidCode}
              placeholder={CODE_REQUIRE_CHECK}
              errorMessage={codeErrorMessage}
            />
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
          </>
        )}
      </form>
      <div className={styles.findpw__btn}>
        <Link to='/login' className={styles.findpw__btn__prev} style={{ textDecoration: 'none' }}>
          로그인
        </Link>
        <Button text='확인' width='50%' onClick={FindPwBtnAction} />
      </div>
    </div>
  );
};

export default FindPwForm;
