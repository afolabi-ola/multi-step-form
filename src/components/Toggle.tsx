import styled from 'styled-components';
import useApp from '../hooks/useApp';
import React from 'react';

interface ToggleProps {
  isToggled: boolean;
  dispatch: React.Dispatch<{ type: 'toggle' }>;
}

interface ThumbStylesProps {
  $active: boolean;
}

function Toggle() {
  const { isToggled, dispatch }: ToggleProps = useApp();

  return (
    <ToggleContainer onClick={() => dispatch({ type: 'toggle' })}>
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

