import { useState } from 'react';
import MbtiCard, { Card } from '../styled-components/MbtiCard';
import './style.scss';

const CardList = [
  {
    mbti: 'ISTJ',
    deg: '22.5deg',
  },
  {
    mbti: 'ISFJ',
    deg: '45deg',
  },
  {
    mbti: 'INTJ',
    deg: '67.5deg',
  },
  {
    mbti: 'INFJ',
    deg: '90deg',
  },
  {
    mbti: 'ISTP',
    deg: '112.5deg',
  },
  {
    mbti: 'ISFP',
    deg: '135deg',
  },
  {
    mbti: 'INFP',
    deg: '157.5deg',
  },
  {
    mbti: 'INTP',
    deg: '180deg',
  },
  {
    mbti: 'ESTP',
    deg: '202.5deg',
  },
  {
    mbti: 'ESFP',
    deg: '225deg',
  },
  {
    mbti: 'ENFP',
    deg: '247.5deg',
  },
  {
    mbti: 'ENTP',
    deg: '270deg',
  },
  {
    mbti: 'ESTJ',
    deg: '292.5deg',
  },
  {
    mbti: 'ESFJ',
    deg: '315deg',
  },
  {
    mbti: 'ENFJ',
    deg: '337.5deg',
  },
  {
    mbti: 'ENTJ',
    deg: '360deg',
  },
];

const Carousel = () => {
  const [selectedCard, setSelectedCard] = useState<Card>({
    mbti: 'ENTJ', // 초기값
    deg: '360deg',
  });
  const onClickCard = (mbti: string) => {
    // FIXME : 마지막카드에서 첫 카드를 누를때 다음으로 이어지는게 아니라 처음으로 다시 돌아감
    const matchingCard = CardList.find((card): any => card.mbti === mbti);
    if (matchingCard) {
      setSelectedCard(matchingCard);
    }
  };
  return (
    <div className='Carousel'>
      <div
        className='Carousel__box'
        style={{ transform: `rotateX(-5deg) translateY(-20px) rotateY(-${selectedCard.deg})` }}
      >
        {CardList &&
          CardList.map((card: any) => {
            return (
              <MbtiCard
                key={card.mbti}
                mbti={card.mbti}
                background={`var(--color-${card.mbti})`}
                deg={card.deg}
                onClickCard={onClickCard}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Carousel;
