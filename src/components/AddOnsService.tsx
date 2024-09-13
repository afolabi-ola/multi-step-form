import styled from 'styled-components';

interface AddOnsServiceProps {
  title: string;
  desc: string;
  price: string;
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
  return (
    <AddOnsServiceStyles onClick={onCheck} $isChecked={isChecked}>
      <FirstDivStyles>
        <input
          type='checkbox'
          name={title}
          id={title}
          checked={isChecked}
          onChange={onCheck}
        />
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </FirstDivStyles>
      <span>{price}</span>
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
