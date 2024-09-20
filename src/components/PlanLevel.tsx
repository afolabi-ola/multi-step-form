import styled from 'styled-components';
import useApp from '../hooks/useApp';

interface PlanLevelProps {
  image: string;
  title: string;
  price: number;
}

function PlanLevel({ title, price, image }: PlanLevelProps) {
  const { isToggled, planDetails, dispatch } = useApp();

  const isSelected = planDetails.desc === title;

  return (
    <PlanLevelStyles
      onClick={() =>
        dispatch({
          type: 'planDetails',
          payload: {
            desc: title,
            price: price,
            duration: isToggled ? 'Yearly' : 'Monthly',
          },
        })
      }
      $isSelected={isSelected}
    >
      <span>
        <img src={image} alt={image} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>
          ${price}/{isToggled ? 'yr' : 'mo'}
        </p>
        {isToggled && <span>2 months free</span>}
      </div>
    </PlanLevelStyles>
  );
}

export default PlanLevel;

const PlanLevelStyles = styled.div<{ $isSelected: boolean }>`
  border: 1px solid var(--light-gray);
  background: ${({ $isSelected }) =>
    $isSelected ? 'var(--light-blue)' : ' transparent'};
  min-width: 8rem;
  max-width: 8rem;
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
      font-weight: var(--font-md);
      color: var(--marine-blue);
      font-size: 0.8rem;
    }
    h3 {
      font-size: 0.9rem;
    }
  }
`;
