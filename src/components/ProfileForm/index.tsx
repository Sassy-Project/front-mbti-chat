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
    <form className='ProfileForm'>
      <div className='BasicInput'>
        <Label>아이디</Label>
        <Input isFocused />
      </div>
      <div className='BasicInput'>
        <Label>닉네임</Label>
        <Input isFocused />
      </div>
      <div className='BasicInput'>
        <Label>이메일</Label>
        <Input isFocused />
      </div>
      <div className='BasicInput'>
        <Label>MBTI 선택</Label>
        <Input isFocused />
      </div>
      <Button text='취소' onClick={onClickCancel} background='#F4F4F4' color='#646464' />
      <Button text='변경완료' onClick={onClickEvent} />
    </form>
  );
};

export default ProfileForm;
