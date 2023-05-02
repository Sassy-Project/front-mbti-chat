import LoginForm from '../../components/LoginForm';
import SymbolTextLogo from '../../assets/SymbolTextLogo';
import styles from './style.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.LoginPage}>
      <h2>
        <SymbolTextLogo />
      </h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
