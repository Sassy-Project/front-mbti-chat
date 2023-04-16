import styles from './style.module.scss';
import Carousel from '../../components/Carousel/index';
import StartTest from '../../components/MbtiTest/startTest';

const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <div className={styles.MainPage__chatStart}>MBTI 채팅 바로시작</div>
      <div className={styles.MainPage__carousel}>
        <Carousel />
      </div>
      <StartTest />
    </div>
  );
};

export default MainPage;
