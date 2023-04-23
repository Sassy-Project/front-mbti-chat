import styled from 'styled-components';

export interface Card {
  mbti: string;
  id: number;
  isSelected?: boolean;
}
interface MbtiCardProps extends Card {
  background: string;
  onClickCard: (mbti: string) => void;
  isSelected: boolean;
}

interface StyledMbtiCardProps {
  background: string;
  id: any;
  isSelected: boolean;
}
const MbtiCard = (props: MbtiCardProps) => {
  const { mbti, background, id, onClickCard, isSelected } = props;
  return (
    <StyledMbtiCard
      background={background}
      id={id}
      onClick={() => onClickCard(mbti)}
      isSelected={isSelected}
    >
      <span>{mbti}</span>
    </StyledMbtiCard>
  );
};

const StyledMbtiCard = styled.div<StyledMbtiCardProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size-card);
  height: calc(var(--size-card) * 2 / 3);
  color: var(--color-text);
  transform: ${({ id }) => `rotateY(${id * 22.5}deg)`} translateZ(calc(var(--size-card) * 3))
    ${({ isSelected }) => isSelected && 'scale(1.2)'};
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  transform-origin: center;
  background: ${({ background }) => background};
  cursor: pointer;
  span {
    background: ${({ background }) => background};
  }
  &:hover {
    filter: brightness(0.8);
  }
`;

export default MbtiCard;
