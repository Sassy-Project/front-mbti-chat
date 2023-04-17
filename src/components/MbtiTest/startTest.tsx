import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './startTest.module.scss';
import Button from '../styled-components/Button';

const StartTest = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/mbtiTest', { state: { name: userName } });
  };
  const onChange = (e) => {
    setUserName(e.currentTarget.value);
  };
  return (
    <div className={styles.startTest}>
      <div className={styles.startTest__title}>여행 스타일로 보는 나의 성격은?</div>
      <div className={styles.startTest__subtitle}>
        총 16개의 유형의 MBTI 성향을 기반으로 여행 스타일 속 나의 모습을 알아보아요
      </div>
      <img src={`${process.env.PUBLIC_URL}/images/mbtiTest/mbtiTest-start.png`} alt='이미지' />
      <input
        className={styles.startTest__input}
        type='text'
        onChange={onChange}
        placeholder='이름을 입력해주세요'
        required
      />
      <form className={styles.startTest__button} onSubmit={onSubmit}>
        <Button text='테스트하기' />
      </form>
    </div>
  );
};

export default StartTest;
