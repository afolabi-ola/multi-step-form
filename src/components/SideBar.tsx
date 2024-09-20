import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import sideBarBackground from '../assets/bg-sidebar-desktop.svg';
import Step from './Step';

function SideBar() {
  return (
    <SideBarStyles>
      <StepDivCont>
        <NavLink to='user'>
          <Step num={1} stepNum='STEP 1' stepText='YOUR INFO' />
        </NavLink>

        <NavLink to='plans'>
          <Step num={2} stepNum='STEP 2' stepText='SELECT PLAN' />
        </NavLink>

        <NavLink to='addons'>
          <Step num={3} stepNum='STEP 3' stepText='ADD-ONS' />
        </NavLink>

        <NavLink to='finish'>
          <Step num={4} stepNum='STEP 4' stepText='SUMMARY' />
        </NavLink>
      </StepDivCont>
    </SideBarStyles>
  );
}

export default SideBar;

const SideBarStyles = styled.div`
  background-image: url('./bg-sidebar-desktop.svg');
  min-width: 15.75rem;
  max-height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
`;

const StepDivCont = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  a {
    text-decoration: none;
    color: inherit;
    &.active span {
      background-color: var(--light-blue);
      color: var(--marine-blue);
    }
  }
`;
