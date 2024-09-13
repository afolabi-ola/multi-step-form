import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  title: string;
  children: React.ReactNode;
}

function Header({ title, children }: HeaderProps) {
  return (
    <HeaderStyle>
      <h1>{title}</h1>
      <p>{children}</p>
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.div`
  h1 {
    margin-bottom: 10px;
    color: var(--marine-blue);
  }
  p {
    color: var(--cool-gray);
    font-weight: var(--font-sm);
  }
`;
