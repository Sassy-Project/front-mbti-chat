import styled from 'styled-components';

export interface Card {
  mbti: string;
  deg: string;
}
interface MbtiCardProps extends Card {
  background: string;
  onClickCard: (mbti: string) => void;
}
interface StyledMbtiCardProps {
  background: string;
  deg: string;
}
const MbtiCard = (props: MbtiCardProps) => {
  const { mbti, background, deg, onClickCard } = props;
  return (
    <StyledMbtiCard background={background} deg={deg} onClick={() => onClickCard(mbti)}>
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
  transform: ${({ deg }) => `rotateY(${deg})`} translateZ(calc(var(--size-card) * 3));
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  transform-origin: center;
  background: ${({ background }) => background};
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;

export default MbtiCard;
