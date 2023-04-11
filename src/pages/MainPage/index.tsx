import styles from './style.module.scss';
import Carousel from '../../components/Carousel/index';

const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <div className={styles.MainPage__chatStart}>MBTI 채팅 바로시작</div>
      <div className={styles.MainPage__carousel}>
        <Carousel />
      </div>
      <iframe
        title='mbtiTest'
        className={styles.MainPage__iframe}
        width='100%'
        height='800px'
        src='https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC'
      />
    </div>
  );
};

export default MainPage;
