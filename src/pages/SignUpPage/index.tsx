import SignUpForm from '../../components/SignUpForm';
import './style.scss';
import SymbolTextLogo from '../../assets/SymbolTextLogo';

const SignUpPage = () => {
  return (
    <div className='SignUpPage'>
      <h2>
        <SymbolTextLogo />
      </h2>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
