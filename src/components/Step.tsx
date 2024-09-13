import styled from 'styled-components';

interface StepProps {
  num: number;
  stepNum?: string;
  stepText?: string;
}
function Step({ num, stepNum, stepText }: StepProps) {
  return (
    <StepStyles>
      <span>{num}</span>
      <div>
        <p>{stepNum}</p>
        <p>{stepText}</p>
      </div>
    </StepStyles>
  );
}

export default Step;

const StepStyles = styled.div`
  width: 70%;
  height: 2.7rem;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem 2rem;
  align-items: center;
  span {
    border: 1px solid var(--white);
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 1rem;
    font-weight:var(--font-lg);
    color: var(--white);
  }
  div {
    width: 7rem;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    font-size: .9rem;

    p:nth-child(1) {
      color: var(--light-gray);
      font-weight: var(--font-weight-sm);
      margin-bottom: 0.1rem;
    }
    p:nth-child(2) {
      color: var(--white);
      font-weight: var(--font-lg);
    }
  }
`;
