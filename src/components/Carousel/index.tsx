/* eslint-disable no-console */
import { useState } from 'react';
import MbtiCard, { Card } from '../styled-components/MbtiCard';
import './style.scss';

const mbtiList = [
  'ESTP',
  'ESFP',
  'ENFP',
  'ENTP',
  'ESTJ',
  'ESFJ',
  'ENFJ',
  'ENTJ',
  'ISTJ',
  'ISFJ',
  'INFJ',
  'INTJ',
  'ISTP',
  'ISFP',
  'INFP',
  'INTP',
];

const Carousel = () => {
  const [selectedCard, setSelectedCard] = useState<Card>({
    mbti: 'ESTP', // 초기값
    index: 0,
  });
  const [stackIndex, setStackIndex] = useState<number>(0);

  const onClickCard = (mbti: string) => {
    const matchingCardIndex = mbtiList.indexOf(mbti);
    const relativeIndex = calculateRelativeIndex(selectedCard.index, matchingCardIndex);
    setSelectedCard({ mbti, index: matchingCardIndex });
    setStackIndex((prevStackIndex) => prevStackIndex + relativeIndex);
  };

  const calculateRelativeIndex = (currentIndex: number, matchingIndex: number): number => {
    const distance = Math.abs(currentIndex - matchingIndex);
    if (distance > 8) {
      return matchingIndex > 8 + currentIndex ? 16 - distance : distance - 16;
    }
    return currentIndex - matchingIndex;
  };

  return (
    <div className='Carousel'>
      <div
        className='Carousel__box'
        style={{
          transform: `rotateX(-5deg) translateY(-20px) rotateY(${stackIndex * 22.5}deg)`,
        }}
      >
        {mbtiList &&
          mbtiList.map((mbti: string, index: number): JSX.Element => {
            return (
              <MbtiCard
                key={mbti}
                mbti={mbti}
                background={`var(--color-${mbti})`}
                index={index}
                onClickCard={onClickCard}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Carousel;
