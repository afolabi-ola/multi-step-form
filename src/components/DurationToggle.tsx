import styled from 'styled-components';
import Toggle from './Toggle';
import useApp from '../hooks/useApp';

interface ToggleTextProps {
  $isActive: boolean;
}

interface DurationToggleProps {
  isToggled: boolean;
}

function DurationToggle() {
  const { isToggled }: DurationToggleProps = useApp();

  return (
    <DurationToggleStyle>
      <ToggleText $isActive={!isToggled}>Monthly</ToggleText>
      <Toggle />
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

