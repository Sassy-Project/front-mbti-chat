import ChangePwForm from '../../components/ChangePwForm';
import SymbolTextLogo from '../../assets/SymbolTextLogo';
import styles from './style.module.scss';

const ChangePwPage = () => {
  return (
    <div className={styles.ChangePwPage}>
      <h2>
        <SymbolTextLogo />
      </h2>
      <ChangePwForm />
    </div>
  );
};

export default ChangePwPage;
