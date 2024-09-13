import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from '../components/SideBar';

const AppLayout = () => {
  return (
    <AppLayoutStyle>
      <SideBar />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </AppLayoutStyle>
  );
};

export default AppLayout;

const AppLayoutStyle = styled.div`
  min-width: 65vw;
  height: 85vh;
  max-height: 85vh;
  min-height: 85vh;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  padding: 10px;
`;

const StyledOutlet = styled.div`
  flex: 1;
  padding: 2rem 5rem 0.8rem 5rem;
`;
