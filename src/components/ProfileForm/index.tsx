import { useState, SyntheticEvent, useCallback, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  EMAIL_REQUIRE_CHECK,
  EMAIL_VALID_CHECK,
  EMAIL_OVERLAP_CHECK,
} from '../../constants/message';
import LabelBasicInput from '../LabelBasicInput';
import LabelBasicSelect from '../LabelBasicSelect';
import Button from '../styled-components/Button';
import API, { UpdateProfileData } from '../../API/API';
import styles from './style.module.scss';
import { regEmail } from '../../constants/regEx';
import Modal from '../styled-components/Modal';

interface ProfileFormData {
  loginId: string;
  nickname: string;
  mbti: string;
  gender: string;
}
const mbtiList: Array<string> = [
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

const genderList: Array<string> = ['남', '여'];

const ProfileForm = () => {
  const navigate = useNavigate();
  const { userId } = useParams<string>();
  const [userEmail, setUserEmail] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>(EMAIL_REQUIRE_CHECK);
  const [userData, setUserData] = useState<ProfileFormData>({
    loginId: '',
    nickname: '',
    mbti: '',
    gender: '',
  });
  const [modalOpen, setModalOpen] = useState(false);

  const onClickCancel = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    window.location.href = '/';
  }, []);

  const updateProfile = async () => {
    const data: UpdateProfileData = {
      loginId: userData.loginId,
      nickname: userData.nickname,
      email: userEmail,
      mbti: userData.mbti,
      gender: userData.gender,
      userId,
    };
    try {
      await API.updateProfile(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      if (error) {
        setIsValidEmail(true);
        setEmailErrorMessage(EMAIL_OVERLAP_CHECK);
      }
    }
  };

  const onSubmitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert('수정이 완료되었습니다');
    updateProfile();
  };

  const onChangeUserData = (e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const onChangeEmail = (e: SyntheticEvent<HTMLInputElement>) => {
    setUserEmail(e.currentTarget.value);
    setIsValidEmail(false);
  };

  const onBlurEmail = () => {
    if (!userEmail) {
      setIsValidEmail(true);
      setEmailErrorMessage(EMAIL_REQUIRE_CHECK);
    }
  };

  const onClickShowModal = () => setModalOpen(true);
  const onClickCloseModal = () => setModalOpen(false);
  const onClickSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleSubmit = async () => {
    const data = { userId };
    await API.deleteUserId(data);
    localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    // 디바운스 적용
    const timer = setTimeout(() => {
      if (!regEmail.test(userEmail)) {
        setIsValidEmail(true);
        setEmailErrorMessage(EMAIL_VALID_CHECK);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [userEmail]);

  useEffect(() => {
    const getProfile = async () => {
      const response = await API.getProfile({ userId });
      console.log(`res: ${response}`);
      setUserData(response.data);
      setUserEmail(response.data.email);
    };
    getProfile();
  }, [userId]);

  return (
    <div className={styles.ProfileForm}>
      <h2>회원정보 수정</h2>
      <div className={styles.support}>
        <Link to='/changepw' style={{ textDecoration: 'none' }}>
          비밀번호 변경
        </Link>
        <Link to='' style={{ textDecoration: 'none' }} onClick={onClickShowModal}>
          회원 탈퇴
        </Link>
      </div>
      <form>
        <LabelBasicInput
          label='loginId'
          text='아이디'
          name='loginId'
          id='loginId'
          type='text'
          value={userData.loginId}
          onChange={onChangeUserData}
          disabled
        />
        <LabelBasicInput
          label='nickname'
          text='닉네임'
          name='nickname'
          id='nickname'
          type='text'
          value={userData.nickname}
          onChange={onChangeUserData}
        />
        <LabelBasicInput
          label='email'
          text='이메일'
          name='email'
          id='email'
          type='email'
          value={userEmail}
          onChange={onChangeEmail}
          hasError={isValidEmail}
          onBlur={onBlurEmail}
          placeholder='ex)email@naver.com'
          errorMessage={emailErrorMessage}
        />
        <LabelBasicSelect
          label='mbti'
          text='MBTI'
          name='mbti'
          id='mbti'
          options={mbtiList}
          value={userData.mbti}
          onChange={onChangeUserData}
        />
        <LabelBasicSelect
          label='gender'
          text='성별'
          name='gender'
          id='gender'
          options={genderList}
          value={userData.gender}
          onChange={onChangeUserData}
        />
        <Button onClick={onSubmitForm} text='수정하기' />
        <Button onClick={onClickCancel} text='메인으로' background='#D9D9D9' />
      </form>
      {modalOpen && (
        <Modal>
          <h2>회원탈퇴</h2>
          <p className={styles.modal__text}>계정 탈퇴시 모든 개인정보가 삭제됩니다</p>
          <Button text='회원탈퇴' onClick={onClickSignOut} />
          <Link to='' style={{ textDecoration: 'none' }} onClick={onClickCloseModal}>
            다시 생각 해볼게요.
          </Link>
        </Modal>
      )}
    </div>
  );
};

export default ProfileForm;
