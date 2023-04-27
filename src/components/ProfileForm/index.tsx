import { useState, SyntheticEvent, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EMAIL_REQUIRE_CHECK, EMAIL_VALID_CHECK } from '../../constants/message';
import LabelBasicInput from '../LabelBasicInput';
import LabelBasicSelect from '../LabelBasicSelect';
import Button from '../styled-components/Button';
import API, { UpdateProfileData } from '../../API/API';
import styles from './style.module.scss';
import { regEmail } from '../../constants/regEx';

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
    await API.updateProfile(data);
  };

  const onSubmitForm = (e: SyntheticEvent) => {
    e.preventDefault();
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
      setUserData(response.data);
    };
    getProfile();
  }, [userId]);

  return (
    <form className={styles.ProfileForm}>
      <LabelBasicInput
        label='loginId'
        text='아이디'
        name='loginId'
        id='loginId'
        type='text'
        value={userData.loginId}
        onChange={onChangeUserData}
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
        id='mbti'
        options={mbtiList}
        value={userData.mbti}
        onChange={onChangeUserData}
      />
      <LabelBasicSelect
        label='gender'
        text='성별'
        id='gender'
        options={genderList}
        value={userData.gender}
        onChange={onChangeUserData}
      />
      <Button onClick={onSubmitForm} text='수정하기' />
      <Button onClick={onClickCancel} text='메인으로' background='#D9D9D9' />
    </form>
  );
};

export default ProfileForm;
