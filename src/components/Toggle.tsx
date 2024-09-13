import styled from 'styled-components';

interface ToggleProps {
  isToggled: boolean;
  onHandleToggle: () => void;
}

interface ThumbStylesProps {
  $active: boolean;
}

function Toggle({ isToggled, onHandleToggle }: ToggleProps) {
  return (
    <ToggleContainer onClick={onHandleToggle}>
      <ThumbStyles $active={isToggled}></ThumbStyles>
    </ToggleContainer>
  );
}

export default Toggle;

const ToggleContainer = styled.div`
  width: 2.5rem;
  height: 1.3rem;
  background-color: var(--marine-blue);
  margin: 0 1.5rem;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ThumbStyles = styled.div<ThumbStylesProps>`
  width: 1.3rem;
  height: 100%;
  background-color: var(--white);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease;
  transform: translateX(${({ $active }) => ($active === true ? '100%' : '0%')});
`;
// const ThumbStyles = styled.div.attrs<ThumbStylesProps>(({ active }) => ({
//   style: {
//     transform: active ? 'translateX(100%)' : 'translateX(0%)',
//   },
// }))<ThumbStylesProps>`
//   width: 1.3rem;
//   height: 100%;
//   background-color: var(--white);
//   border-radius: 50%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   transition: transform 0.3s ease;
// `;
