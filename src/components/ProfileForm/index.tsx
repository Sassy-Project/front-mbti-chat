import { useState, useCallback, SyntheticEvent } from 'react';
import Input from '../styled-components/Input';
import Button from '../styled-components/Button';
import Label from '../styled-components/Label';
import './style.scss';
import API from '../../API/API';

const ProfileForm = () => {
  const [userId, setUserId] = useState<any>(API.logIn); // 추후 default값은 API값으로 변경
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
      <div className='BasicInput'>
        <Label>아이디</Label>
        <Input value={userId} placeholder='아이디' />
      </div>
      <div className='BasicInput'>
        <Label>닉네임</Label>
        <Input value={userNickname} onChange={onChangeNickname} />
      </div>
      <div className='BasicInput'>
        <Label>이메일</Label>
        <Input value={userEmail} />
      </div>
      <div className='BasicInput'>
        <Label>MBTI 선택</Label>
        <Input value={userMbti} />
      </div>
      <Button text='취소' onClick={onClickCancel} background='#F4F4F4' color='#646464' />
      <Button text='변경완료' color='#FFFFFF' />
    </form>
  );
};

export default ProfileForm;
