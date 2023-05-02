import { useCallback, useState } from 'react';
import LabelBasicInput from '../LabelBasicInput';
import {
  PW_REQUIRE_CHECK,
  PW_VALID_CHECK,
  PWCONFIRM_REQUIRE_CHECK,
  PWCONFIRM_VALID_CHECK,
} from '../../constants/message';
import styles from './style.module.scss';
import Button from '../styled-components/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import API from '../../API/API';
import { AxiosResponse } from 'axios';

interface UserData {
  accessToken: string;
  accessTokenExpiresIn: number;
  id: number;
  nickname: string;
  refreshToken: string;
}

const FindNewPwForm = () => {
  // hooks
  const navigate = useNavigate();
  // password
  const [inputs, setInputs] = useState({
    newPassword: '',
    newPasswordCheck: '',
  });
  const { newPassword, newPasswordCheck } = inputs;
  const [isValidNewPassword, setIsValidNewPassword] = useState<boolean>(false);
  const [isValidNewPasswordCheck, setIsValidNewPasswordCheck] = useState<boolean>(false);
  const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState<string>(PW_VALID_CHECK);
  const [newPasswordCheckErrorMessage, setNewPasswordCheckErrorMessage] =
    useState<string>(PWCONFIRM_REQUIRE_CHECK);
  const location = useLocation();
  const userId = location.state && location.state.userId;

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
  const onBlurNewPassword = (e: React.FocusEvent<HTMLElement>) => {
    if (!newPassword) {
      setIsValidNewPassword(true);
      setNewPasswordErrorMessage(PW_REQUIRE_CHECK);
    } else if (newPassword && newPassword.length < 8) {
      setIsValidNewPassword(true);
      setNewPasswordErrorMessage(PW_VALID_CHECK);
    } else {
      setIsValidNewPassword(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onBlurNewPasswordCheck = (e: React.FocusEvent<HTMLElement>) => {
    if (!newPasswordCheck) {
      setIsValidNewPasswordCheck(true);
      setNewPasswordCheckErrorMessage(PW_REQUIRE_CHECK);
    }

    if (newPassword !== newPasswordCheck) {
      setIsValidNewPasswordCheck(true);
      setNewPasswordCheckErrorMessage(PWCONFIRM_VALID_CHECK);
    } else {
      setIsValidNewPasswordCheck(false);
    }
  };

  const FindNewPwBtnAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!newPassword) {
      setIsValidNewPassword(true);
      setNewPasswordErrorMessage(PW_REQUIRE_CHECK);
      return;
    }

    if (newPassword !== newPasswordCheck) {
      setIsValidNewPasswordCheck(true);
      setNewPasswordCheckErrorMessage(PWCONFIRM_VALID_CHECK);
      return;
    }

    if (!isValidNewPassword && !isValidNewPasswordCheck) {
      findNewPwUpdate();
    }
  };

  const setLocalstorage = (response: AxiosResponse<UserData>) => {
    const { accessToken, accessTokenExpiresIn, id, nickname, refreshToken } = response.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('accessTokenExpiresIn', String(accessTokenExpiresIn));
    localStorage.setItem('id', String(id));
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('refreshToken', refreshToken);
  };

  const findNewPwUpdate = async () => {
    const data = { newPassword, newPasswordCheck, userId };
    const response = await API.updateFindNewPassword(data);
    setLocalstorage(response);
    // eslint-disable-next-line no-alert
    alert('비밀번호가 변경되었습니다.');
    navigate('/');
  };

  return (
    <div className={styles.FindNewPwForm}>
      <h2>비밀번호 변경</h2>
      <form>
        <LabelBasicInput
          label='newPassword'
          text='새로운 비밀번호'
          name='newPassword'
          id='newPassword'
          type='text'
          value={newPassword}
          onChange={onChange}
          onBlur={onBlurNewPassword}
          hasError={isValidNewPassword}
          placeholder={newPasswordErrorMessage}
          errorMessage={newPasswordErrorMessage}
        />
        <LabelBasicInput
          label='newPasswordCheck'
          text='새로운 비밀번호 확인'
          name='newPasswordCheck'
          id='newPasswordCheck'
          type='text'
          value={newPasswordCheck}
          onChange={onChange}
          onBlur={onBlurNewPasswordCheck}
          hasError={isValidNewPasswordCheck}
          placeholder={newPasswordCheckErrorMessage}
          errorMessage={newPasswordCheckErrorMessage}
        />
        <div className={styles.findnewpw__btn}>
          <Link
            to='/login'
            className={styles.findnewpw__btn__prev}
            style={{ textDecoration: 'none' }}
          >
            로그인
          </Link>
          <Button text='확인' width='50%' onClick={FindNewPwBtnAction} />
        </div>
      </form>
    </div>
  );
};

export default FindNewPwForm;
