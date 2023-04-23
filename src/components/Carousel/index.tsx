/* eslint-disable no-console */
import { useContext, useState } from 'react';
import MbtiCard, { Card } from '../styled-components/MbtiCard';
import styles from './style.module.scss';
import { MbtiContext } from '../../Context/MbtiContext';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const { selectMbti } = useContext(MbtiContext);
  const navigate = useNavigate();
  const userId = localStorage.getItem('id');

  const [mbtiList, setMbtiList] = useState([
    { id: 1, mbti: 'ESTP', isSelected: false },
    { id: 2, mbti: 'ESFP', isSelected: false },
    { id: 3, mbti: 'ENFP', isSelected: false },
    { id: 4, mbti: 'ENTP', isSelected: false },
    { id: 5, mbti: 'ESTJ', isSelected: false },
    { id: 6, mbti: 'ESFJ', isSelected: false },
    { id: 7, mbti: 'ENFJ', isSelected: false },
    { id: 8, mbti: 'ENTJ', isSelected: false },
    { id: 9, mbti: 'ISTJ', isSelected: false },
    { id: 10, mbti: 'ISFJ', isSelected: false },
    { id: 11, mbti: 'INFJ', isSelected: false },
    { id: 12, mbti: 'INTJ', isSelected: false },
    { id: 13, mbti: 'ISTP', isSelected: false },
    { id: 14, mbti: 'ISFP', isSelected: false },
    { id: 15, mbti: 'INFP', isSelected: false },
    { id: 16, mbti: 'INTP', isSelected: false },
  ]);
  const [selectedCard, setSelectedCard] = useState<Card>({
    mbti: '',
    id: 0,
  });
  const [stackIndex, setStackIndex] = useState<number>(0);

  const onSpinCard = (mbti: string) => {
    const matchingCard = mbtiList.find((card) => card.mbti === mbti);
    const relativeIndex = calculateRelativeIndex(selectedCard.id - 1, matchingCard.id - 1);
    setStackIndex((prevStackIndex) => prevStackIndex + relativeIndex);

    return matchingCard;
  };

  const updateMbtiList = (matchingCard) => {
    const updatedMbtiList = mbtiList.map((card) =>
      card.id === matchingCard.id ? { ...card, isSelected: true } : { ...card, isSelected: false }
    );
    setMbtiList(updatedMbtiList);
  };

  const onClickCard = (mbti: string) => {
    if (mbtiList.some((card) => card.isSelected && card.mbti === mbti)) {
      userId ? navigate(`/chat/${userId}`) : alert('로그인 해주세요');
    }
    // 빙글빙글 담당
    const matchingCard = onSpinCard(mbti);
    // 로컬 상태 업데이트
    updateMbtiList(matchingCard);
    // 전역 상태 업데이트
    selectMbti(mbti);

    setSelectedCard({ mbti, id: matchingCard.id, isSelected: true });
  };

  const calculateRelativeIndex = (currentIndex: number, matchingIndex: number): number => {
    const distance = Math.abs(currentIndex - matchingIndex);
    if (distance > 8) {
      return matchingIndex > 8 + currentIndex ? 16 - distance : distance - 16;
    }
    return currentIndex - matchingIndex;
  };

  return (
    <div className={styles.Carousel}>
      <div
        className={styles.Carousel__box}
        style={{
          transform: `rotateX(-5deg) translateY(-20px) rotateY(${stackIndex * 22.5}deg)`,
        }}
      >
        {mbtiList &&
          mbtiList.map((mbti): JSX.Element => {
            return (
              <MbtiCard
                key={mbti.id}
                mbti={mbti.mbti}
                background={`var(--color-${mbti.mbti})`}
                id={mbti.id}
                onClickCard={onClickCard}
                isSelected={mbti.isSelected}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Carousel;
