import Button from '../styled-components/Button';
import './style.scss';

const ProfileForm = () => {
  const onClickEvent = () => {
    console.log('Clicked!');
  };

  return (
    <div className='ProfileForm'>
      <div>test</div>
      <Button text='테스트' onClick={onClickEvent} />
    </div>
  );
};

export default ProfileForm;
