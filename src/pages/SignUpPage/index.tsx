import SignUpForm from '../../components/SignUpForm';
import './style.scss';
import PageLog from '../../assets/SymbolTextLogo';

const SignUpPage = () => {
  return (
    <div className='SignUpPage'>
      <h2>
        <PageLog />
      </h2>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
