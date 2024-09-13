import React from 'react';
import styled from 'styled-components';

interface FooterProps {
  children: React.ReactNode;
}

function Footer({ children }: FooterProps) {
  return <FooterStyles>{children}</FooterStyles>;
}

export default Footer;

const FooterStyles = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 100;
  display: flex;
  justify-content: space-between;
`;
