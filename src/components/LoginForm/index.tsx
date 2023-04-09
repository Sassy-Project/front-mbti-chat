import Button from '../styled-components/Button';
import './style.scss';

const LoginForm = () => {
  const onClickEvent = () => {
    // eslint-disable-next-line no-console
    console.log('You clicked !');
  };
  return (
    <div className='LoginForm'>
      <form>이메일</form>

      <Button text='이메일 로그인' onClick={onClickEvent} />
      <Button text='테스트' onClick={onClickEvent} background='var(--color-background)' />
    </div>
  );
};

export default LoginForm;
