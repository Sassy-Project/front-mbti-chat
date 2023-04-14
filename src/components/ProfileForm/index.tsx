import { useState, SyntheticEvent } from 'react';
import BasicInput from '../LabelBasicInput/index';
import BasicSelect from '../LabelBasicSelect/index';
import Button from '../styled-components/Button';
import './style.scss';
import API from '../../API/API';

interface Mbtis {
  id: string;
  name: string;
}
interface Gender {
  id: string;
  name: string;
}

const ProfileForm = () => {
  const [userId, setUserId] = useState<any>(''); // 추후 default값은 API값으로 변경
  const [userNickname, setUserNickname] = useState<string>(''); // 추후 default값은 API값으로 변경
  const [userEmail, setUserEmail] = useState<string>(''); // 추후 default값은 API값으로 변경
  const [selectedMbti, setSelectedMbti] = useState<string>(''); // 추후 default값은 API값으로 변경
  const [selectedGender, setSelectedGender] = useState<string>(''); // 추후 default값은 API값으로 변경

  const mbtis: Mbtis[] = [
    { id: '1', name: '선택하세요' },
    { id: '2', name: 'INFJ' },
  ];

  const genders: Gender[] = [
    { id: '1', name: '남' },
    { id: '2', name: '여' },
  ];

  // Back to Mainpage
  const onClickCancel = (e) => {
    e.preventDefault();
    window.location.href = '/';
  };

  // Nickname input Change Event
  const onChangeNickname = (e: SyntheticEvent<HTMLInputElement>) => {
    setUserNickname(e.currentTarget.value);
  };

  // Email input Change Event
  const onChangeEmail = (e: SyntheticEvent<HTMLInputElement>) => {
    setUserEmail(e.currentTarget.value);
  };

  // MBTI select Change Event
  const handleMbtiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMbti(e.currentTarget.value);
  };

  // Gender select Change Event
  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(e.currentTarget.value);
  };

  return (
    <form className='ProfileForm'>
      <BasicInput text='아이디' isFocused={false} value={userId} />
      <BasicInput
        text='닉네임'
        isFocused={false}
        value={userNickname}
        onChange={onChangeNickname}
      />
      <BasicInput text='이메일' isFocused={false} value={userEmail} onChange={onChangeEmail} />
      <BasicSelect
        text='MBTI 선택'
        options={mbtis.map((mbti) => ({ value: mbti.id, label: mbti.name }))}
        value={selectedMbti}
        onChange={handleMbtiChange}
      />
      <BasicSelect
        text='성별'
        options={genders.map((gender) => ({ value: gender.id, label: gender.name }))}
        value={selectedGender}
        onChange={handleGenderChange}
      />

      <Button text='메인으로' onClick={onClickCancel} background='#F4F4F4' color='#646464' />
      <Button text='변경완료' color='#FFFFFF' />
    </form>
  );
};

export default ProfileForm;
