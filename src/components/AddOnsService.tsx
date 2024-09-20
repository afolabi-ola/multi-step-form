import styled from 'styled-components';
import useApp from '../hooks/useApp';

interface AddOnsServiceProps {
  title: string;
  desc: string;
  price: number;
  isChecked: boolean;
  onCheck: () => void;
}
function AddOnsService({
  title,
  desc,
  price,
  isChecked,
  onCheck,
}: AddOnsServiceProps) {
  const { isYearly } = useApp();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent double triggering if checkbox is clicked directly

    if ((e.target as HTMLElement).tagName !== 'INPUT') {
      onCheck();
    }
  };

  return (
    <AddOnsServiceStyles onClick={handleClick} $isChecked={isChecked}>
      <FirstDivStyles>
        <input
          type='checkbox'
          name={title}
          id={title}
          checked={isChecked}
          onChange={(e) => {
            e.stopPropagation();
            onCheck();
          }}
        />
        <label htmlFor={title}>
          <div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </label>
      </FirstDivStyles>
      <span>
        +${price}/{isYearly ? 'yr' : 'mo'}
      </span>
    </AddOnsServiceStyles>
  );
}

export default AddOnsService;

const AddOnsServiceStyles = styled.div<{ $isChecked: boolean }>`
  border: 1px solid var(--light-gray);
  background-color: ${({ $isChecked }) =>
    $isChecked === true ? 'var(--light-blue)' : ''};
  min-width: 25rem;
  display: flex;
  padding: 0.7rem 1rem;
  justify-content: space-between;
  border-radius: 8px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--purplish-blue);
  }

  span {
    padding: 0.8rem 0;
    color: var(--purplish-blue);
  }
  input {
    width: 1rem;
    margin-right: 1.2rem;
  }
`;

const FirstDivStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  p {
    color: var(--cool-gray);
    margin-top: 5px;
  }
`;
