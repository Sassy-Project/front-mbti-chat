import { useCallback, useState } from 'react';
import LabelBasicInput from '../LabelBasicInput';
import { PW_REQUIRE_CHECK, PW_VALID_CHECK, PWCONFIRM_REQUIRE_CHECK } from '../../constants/message';
import styles from './style.module.scss';
import Button from '../styled-components/Button';
import { Link, useNavigate } from 'react-router-dom';
import API, { changePasswordData } from '../../API/API';

const ChangePwForm = () => {
  // hooks
  const navigate = useNavigate();
  // get id
  const userId = localStorage.getItem('id');
  // password
  const [inputs, setInputs] = useState({
    password: '', // newPassword -> password
    updatePassword: '', // newPasswordCheck -> updatePassword
  });
  const { password, updatePassword } = inputs;
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [isValidUpdatePassword, setIsValidUpdatePassword] = useState<boolean>(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>(PW_VALID_CHECK);
  const [updatePasswordErrorMessage, setUpdatePasswordErrorMessage] =
    useState<string>(PWCONFIRM_REQUIRE_CHECK);

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
  const onBlurPassword = (e: React.FocusEvent<HTMLElement>) => {
    if (!password) {
      setIsValidPassword(true);
      setPasswordErrorMessage(PW_REQUIRE_CHECK);
    } else if (password && password.length < 8) {
      setIsValidPassword(true);
      setPasswordErrorMessage(PW_VALID_CHECK);
    } else {
      setIsValidPassword(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onBlurUpdatePassword = (e: React.FocusEvent<HTMLElement>) => {
    if (!updatePassword) {
      setIsValidUpdatePassword(true);
      setUpdatePasswordErrorMessage(PW_REQUIRE_CHECK);
    }
  };

  const pwBtnAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!password) {
      setIsValidPassword(true);
      setPasswordErrorMessage(PW_REQUIRE_CHECK);
      return;
    }

    if (!isValidPassword && !isValidUpdatePassword) {
      findNewPwUpdate();
    }
  };

  const findNewPwUpdate = async () => {
    const data: changePasswordData = {
      password,
      updatePassword,
      userId,
    };
    const response = await API.changePassword(data);
    // eslint-disable-next-line no-console
    console.log(response);
    // eslint-disable-next-line no-alert
    alert('비밀번호가 변경되었습니다.');
    navigate('/');
  };

  return (
    <div className={styles.FindNewPwForm}>
      <h2>비밀번호 변경</h2>
      <form>
        <LabelBasicInput
          label='password'
          text='기존 비밀번호'
          name='password'
          id='password'
          type='text'
          value={password}
          onChange={onChange}
          onBlur={onBlurPassword}
          hasError={isValidPassword}
          placeholder='기존의 비밀번호를 입력해주세요.'
          errorMessage={passwordErrorMessage}
        />
        <LabelBasicInput
          label='updatePassword'
          text='새로운 비밀번호 확인'
          name='updatePassword'
          id='updatePassword'
          type='text'
          value={updatePassword}
          onChange={onChange}
          onBlur={onBlurUpdatePassword}
          hasError={isValidUpdatePassword}
          placeholder={updatePasswordErrorMessage}
          errorMessage={updatePasswordErrorMessage}
        />
        <div className={styles.findnewpw__btn}>
          <Link
            to='/login'
            className={styles.findnewpw__btn__prev}
            style={{ textDecoration: 'none' }}
          >
            로그인
          </Link>
          <Button text='확인' width='50%' onClick={pwBtnAction} />
        </div>
      </form>
    </div>
  );
};

export default ChangePwForm;
