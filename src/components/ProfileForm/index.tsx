import { useState, SyntheticEvent, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LabelBasicInput from '../LabelBasicInput';
import LabelBasicSelect from '../LabelBasicSelect';
import Button from '../styled-components/Button';
import API from '../../API/API';
import styles from './style.module.scss';

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
  const [userNickname, setUserNickname] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userMbti, setUserMbti] = useState<string>('');
  const [userGender, setUserGender] = useState<string>('');

  const onClickCancel = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    window.location.href = '/';
  }, []);

  const updateProfile = async () => {
    const data = {
      userId,
      nickname: userNickname,
      email: userEmail,
      mbti: userMbti,
      gender: userGender,
    };
    await API.updateProfile(data);
  };

  const onSubmitForm = (e: SyntheticEvent) => {
    e.preventDefault();
    updateProfile();
  };

  const onChangeNicknameEvent = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    setUserNickname(e.currentTarget.value);
  }, []);

  const onChangeEmail = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    setUserEmail(e.currentTarget.value);
  }, []);

  const onChangeMbti = useCallback((e: SyntheticEvent<HTMLSelectElement>) => {
    setUserMbti(e.currentTarget.value);
  }, []);

  const onChangeGender = useCallback((e: SyntheticEvent<HTMLSelectElement>) => {
    setUserGender(e.currentTarget.value);
  }, []);

  useEffect(() => {
    const getProfile = async (): Promise<void> => {
      const { response }: any = await API.getProfile({ userId });
      if (response) {
        setUserNickname(response.nickname);
        setUserEmail(response.email);
        setUserMbti(response.mbti);
        setUserGender(response.gender);
      }
    };

    getProfile();
  }, [userId]);

  return (
    <form className={styles.ProfileForm}>
      <LabelBasicInput
        label='userId'
        text='아이디'
        name='nickname'
        id='nickname'
        type='text'
        value={userId}
      />
      <LabelBasicInput
        label='nickname'
        text='닉네임'
        name='nickname'
        id='nickname'
        type='text'
        value={userNickname}
        onChange={onChangeNicknameEvent}
      />
      <LabelBasicInput
        label='email'
        text='이메일'
        name='email'
        id='email'
        type='email'
        value={userEmail}
        onChange={onChangeEmail}
      />
      <LabelBasicSelect
        label='mbti'
        text='MBTI'
        id='mbti'
        options={mbtiList}
        value={userMbti}
        onChange={onChangeMbti}
      />
      <LabelBasicSelect
        label='gender'
        text='성별'
        id='gender'
        options={genderList}
        value={userGender}
        onChange={onChangeGender}
      />
      <Button onClick={onSubmitForm} text='수정하기' />
      <Button onClick={onClickCancel} text='메인으로' background='#D9D9D9' />
    </form>
  );
};

export default ProfileForm;
