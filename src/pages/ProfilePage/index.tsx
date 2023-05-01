import ProfileForm from '../../components/ProfileForm';
import SymbolTextLogo from '../../assets/SymbolTextLogo';
import styles from './style.module.scss';

const ProfilePage = () => {
  return (
    <div className={styles.ProfilePage}>
      <h2>
        <SymbolTextLogo />
      </h2>
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
