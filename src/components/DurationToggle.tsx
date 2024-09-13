import styled from 'styled-components';
import Toggle from './Toggle';
import { useContext } from 'react';
import { AppContext } from '../App';

interface ToggleTextProps {
  $isActive: boolean;
}

interface DurationToggleProps {
  isToggled: boolean;
  onHandleToggled: () => void;
}

function DurationToggle() {
  const { isToggled, onHandleToggled }: DurationToggleProps =
    useContext(AppContext);

  return (
    <DurationToggleStyle>
      <ToggleText $isActive={!isToggled}>Monthly</ToggleText>
      <Toggle onHandleToggle={onHandleToggled} isToggled={isToggled} />
      <ToggleText $isActive={isToggled}>Yearly</ToggleText>
    </DurationToggleStyle>
  );
}

export default DurationToggle;

const DurationToggleStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-radius: 10px;
  background-color: var(--light-gray);
`;

const ToggleText = styled.p<ToggleTextProps>`
  color: ${({ $isActive }) =>
    $isActive === true ? 'var(--marine-blue)' : 'var(--cool-gray)'};
  font-weight: var(--font-lg);
`;
// const ToggleText = styled.p.attrs<ToggleTextProps>(({ active }) => ({
//   style: {
//     color: active ? 'var(--marine-blue)' : 'var(--cool-gray)',
//   },
// }))<ToggleTextProps>`
//   font-weight: var(--font-lg);
// `;
