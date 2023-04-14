import { useState, useCallback, SyntheticEvent } from 'react';
import BasicInput from '../LabelBasicInput/index';
import Button from '../styled-components/Button';
import Label from '../styled-components/Label';
import './style.scss';
import API from '../../API/API';

const ProfileForm = () => {
  const [userId, setUserId] = useState<any>(''); // 추후 default값은 API값으로 변경
  const [userNickname, setUserNickname] = useState<string>(''); // 추후 default값은 API값으로 변경
  const [userEmail, setUserEmail] = useState<string>(''); // 추후 default값은 API값으로 변경
  const [userMbti, setUserMbti] = useState<string>(''); // 추후 default값은 API값으로 변경

  const onClickCancel = (e) => {
    e.preventDefault();
    window.location.href = '/';
  };

  const onChangeNickname = (e: SyntheticEvent<HTMLInputElement>) => {
    setUserNickname(e.currentTarget.value);
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
      <BasicInput text='이메일' isFocused={false} value={userEmail} />
      <BasicInput text='MBTI 선택' isFocused={false} value={userMbti} />
      <Button text='취소' onClick={onClickCancel} background='#F4F4F4' color='#646464' />
      <Button text='변경완료' color='#FFFFFF' />
    </form>
  );
};

export default ProfileForm;
