import { useState, SyntheticEvent, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../API/API';
import './style.scss';

interface Mbti {
  id: string;
  name: string;
}
interface Gender {
  id: string;
  name: string;
}

const mbtis: Mbti[] = [
  { id: '1', name: '선택하세요' },
  { id: '2', name: 'ESTJ' },
  { id: '3', name: 'ESTP' },
  { id: '4', name: 'ESFJ' },
  { id: '5', name: 'ESFP' },
  { id: '6', name: 'ENTJ' },
  { id: '7', name: 'ENTP' },
  { id: '8', name: 'ENFJ' },
  { id: '9', name: 'ENFP' },
  { id: '10', name: 'ISTJ' },
  { id: '11', name: 'ISTP' },
  { id: '12', name: 'ISFJ' },
  { id: '13', name: 'ISFP' },
  { id: '14', name: 'INTJ' },
  { id: '15', name: 'INTP' },
  { id: '16', name: 'INFJ' },
  { id: '17', name: 'INFP' },
];

const genders: Gender[] = [
  { id: '1', name: '선택하세요' },
  { id: '2', name: '남' },
  { id: '3', name: '여' },
];

const ProfileForm = () => {
  const { userId } = useParams();
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
      userId: '1',
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
      const { data } = await API.getProfile();
      if (data) {
        setUserNickname(data.nickname);
        setUserEmail(data.email);
        setUserMbti(data.mbti);
        setUserGender(data.gender);
      }
    };

    getProfile();
  }, []);

  return (
    <form className='profileForm'>
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
          {mbtis.map((mbti) => (
            <option key={mbti.id} value={mbti.name}>
              {mbti.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor='userGender'>MBTI</label>
        <select value={userGender} onChange={onChangeGenderEvent}>
          {genders.map((gender) => (
            <option key={gender.id} value={gender.name}>
              {gender.name}
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
