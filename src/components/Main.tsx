import React from 'react';
import styled from 'styled-components';

interface MainProps {
  children: React.ReactNode;
}

function Main({ children }: MainProps) {
  return <MainStyles>{children}</MainStyles>;
}

export default Main;

const MainStyles = styled.main`
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
`;
