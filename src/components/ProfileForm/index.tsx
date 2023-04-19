import { useState, SyntheticEvent, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../API/API';
import './style.scss';

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

  const onChangeNicknameEvent = (e: SyntheticEvent<HTMLInputElement>) => {
    setUserNickname(e.currentTarget.value);
  };

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
    <form className='profileForm'>
      <div>
        <label htmlFor='userId'>아이디</label>
        <input value={userId} />
      </div>
      <div>
        <label htmlFor='userNickname'>닉네임</label>
        <input value={userNickname} onChange={onChangeNicknameEvent} />
      </div>
      <div>
        <label htmlFor='userEmail'>이메일</label>
        <input value={userEmail} onChange={onChangeEmailEvent} />
      </div>
      <div>
        <label htmlFor='userMbti'>MBTI</label>
        <select value={userMbti} onChange={onChangeMbtiEvent}>
          {mbtiList.map((mbti) => (
            <option key={mbti} value={mbti}>
              {mbti}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor='userGender'>MBTI</label>
        <select value={userGender} onChange={onChangeGenderEvent}>
          {genderList.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>
      <button type='submit' onClick={(e) => onSubmitForm(e)}>
        수정하기
      </button>
      <button type='button' onClick={onClickCancel}>
        메인으로
      </button>
    </form>
  );
};

export default ProfileForm;
