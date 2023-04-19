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

  const fetchProfile = async () => {
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
    fetchProfile();
  };

  const onChangeNicknameEvent = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    setUserNickname(e.currentTarget.value);
  }, []);

  const onChangeEmailEvent = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    setUserEmail(e.currentTarget.value);
  }, []);

  const onChangeMbtiEvent = useCallback((e: SyntheticEvent<HTMLSelectElement>) => {
    setUserMbti(e.currentTarget.value);
  }, []);

  const onChangeGenderEvent = useCallback((e: SyntheticEvent<HTMLSelectElement>) => {
    setUserGender(e.currentTarget.value);
  }, []);

  useEffect(() => {
    const getProfile = async (): Promise<void> => {
      const { data } = await API.getId({ userId });
      if (data) {
        setUserNickname(data.nickname);
        setUserEmail(data.email);
        setUserMbti(data.mbti);
        setUserGender(data.gender);
      }
    };

    getProfile();
  }, [userId]);

  return (
    <form className={styles.ProfileForm}>
      <LabelBasicInput text='아이디' value={userId} />
      <LabelBasicInput text='닉네임' value={userNickname} onChange={onChangeNicknameEvent} />
      <LabelBasicInput text='이메일' value={userEmail} onChange={onChangeEmailEvent} />
      <LabelBasicSelect
        text='MBTI'
        value={userMbti}
        onChange={onChangeMbtiEvent}
        options={mbtiList.map((mbti) => ({ value: mbti, label: mbti }))}
      />
      <LabelBasicSelect
        text='성별'
        value={userGender}
        onChange={onChangeGenderEvent}
        options={genderList.map((gender) => ({ value: gender, label: gender }))}
      />
      <Button onClick={onSubmitForm} text='수정하기' />
      <Button onClick={onClickCancel} text='메인으로' background='#D9D9D9' />
    </form>
  );
};

export default ProfileForm;
