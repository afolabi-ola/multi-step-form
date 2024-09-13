import styled from 'styled-components';

interface PlanLevelProps {
  image: string;
  title: string;
  price: string;
  isYearly: boolean;
}

function PlanLevel({ title, price, image, isYearly }: PlanLevelProps) {
  return (
    <PlanLevelStyles>
      <span>
        <img src={image} alt={image} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{price}</p>
        {isYearly && <span>2 months free</span>}
      </div>
    </PlanLevelStyles>
  );
}

export default PlanLevel;

const PlanLevelStyles = styled.div`
  border: 1px solid var(--light-gray);
  background: transparent;
  width: 90%;
  min-height: 10rem;
  padding: 1rem;
  border-radius: 10px;
  &:hover {
    border-color: var(--marine-blue);
  }
  div {
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    p {
      font-size: var(--font-sm);
      color: var(--cool-gray);
      margin-bottom: 5px;
    }
    span {
      font-size: var(--font-sm);
      color: var(--marine-blue);
      font-size: .8rem;
    }
    h3{
      font-size: .9rem;
    }
  }
`;
