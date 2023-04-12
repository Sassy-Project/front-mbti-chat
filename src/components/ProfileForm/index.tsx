import Input from '../styled-components/Input';
import Button from '../styled-components/Button';
import Label from '../styled-components/Label';
import './style.scss';

const ProfileForm = () => {
  const onClickCancel = () => {
    window.location.href = '/';
  };

  const onClickEvent = () => {
    console.log('Clicked!');
  };

  return (
    <div className='ProfileForm'>
      <div className='BasicInput'>
        <Label htmlFor='userId'>아이디</Label>
        <Input isFocused />
      </div>
      <div className='BasicInput'>
        <Label htmlFor='userNickname'>닉네임</Label>
        <Input isFocused />
      </div>
      <div className='BasicInput'>
        <Label htmlFor='userEmail'>이메일</Label>
        <Input isFocused />
      </div>
      <div className='BasicInput'>
        <Label htmlFor='userMbtiselection'>MBTI 선택</Label>
        <Input isFocused />
      </div>
      <Button text='취소' onClick={onClickCancel} background='#F4F4F4' color='#646464' />
      <Button text='변경완료' onClick={onClickEvent} />
    </div>
  );
};

export default ProfileForm;
