import Button from '../styled-components/Button';
import Input from '../styled-components/Input';
import './style.scss';

const ProfileForm = () => {
  const onClickEvent = () => {
    console.log('Clicked!');
  };

  return (
    <div className='ProfileForm'>
      <form>아이디</form>
      <Input type='text' isFocused />
      <form>닉네임</form>
      <Input type='text' isFocused />
      <form>이메일</form>
      <Input type='text' isFocused />
      <form>MBTI 선택</form>
      <Input type='text' isFocused />
      <Button text='테스트' onClick={onClickEvent} />
    </div>
  );
};

export default ProfileForm;
