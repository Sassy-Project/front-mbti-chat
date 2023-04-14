import Input from '../styled-components/Input';
import Button from '../styled-components/Button';
import Label from '../styled-components/Label';
import './style.scss';

const ProfileForm = () => {
  const onClickCancel = () => {
    window.location.href = '/';
  };

  return (
    <form className='ProfileForm'>
      <div className='BasicInput'>
        <Input isFocused />
      </div>
      <div className='BasicInput'>
        <Input isFocused />
      </div>
      <div className='BasicInput'>
        <Input isFocused />
      </div>
      <div className='BasicInput'>
        <Input isFocused />
      </div>
      <Button text='취소' onClick={onClickCancel} background='#F4F4F4' color='#646464' />
      <Button text='변경완료' />
    </form>
  );
};

export default ProfileForm;
