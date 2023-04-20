import { useContext } from 'react';
import { TokenContext } from '../../Auth/useAuth';
import LoginForm from '../../components/LoginForm';
import './style.scss';

const LoginPage = () => {
  const { login } = useContext(TokenContext);

  return (
    <div className='LoginPage'>
      <h2>로그인</h2>
      <LoginForm login={login} />
    </div>
  );
};

export default LoginPage;
