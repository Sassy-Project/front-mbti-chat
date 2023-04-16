import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './startTest.module.scss';
import Button from '../styled-components/Button';

const StartTest = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const handleChange = ({ target: { value } }) => setName(value);
  const handleSubmit = (event) => {
    event.preventDefault();
    // const a = document.getElementById('name').value;
    // navigate('/test?name=' + a);
  };
  return (
    <div className={styles.startTest}>
      <div className={styles.startTest__title}>여행 스타일로 보는 나의 성격은?</div>
      <div className={styles.startTest__subtitle}>
        총 16개의 유형의 MBTI 성향을 기반으로 여행 스타일 속 나의 모습을 알아보아요
      </div>
      <img src={`${process.env.PUBLIC_URL}/images/mbtiTest/mbtiTest-start.png`} alt='이미지' />
      <form className={styles.startTest__form} onSubmit={handleSubmit}>
        <input
          className={styles.startTest__form__name}
          name='name'
          type='text'
          value={name}
          onChange={handleChange}
          placeholder='이름을 입력해주세요'
          required
        />
        <Button text='테스트하기' />
      </form>
    </div>
  );
};

export default StartTest;
