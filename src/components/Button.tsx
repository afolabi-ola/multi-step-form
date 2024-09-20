import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType: 'next' | 'prev' | 'confirm';
}

function Button({ children, onClick, buttonType = 'confirm' }: ButtonProps) {
  return (
    <ButtonStyle onClick={onClick} $buttonType={buttonType}>
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<{ $buttonType: 'next' | 'prev' | 'confirm' }>`
  width: 7rem;
  background-color: ${(props) =>
    props.$buttonType === 'next'
      ? `var(--marine-blue)`
      : props.$buttonType === 'prev'
      ? 'transparent'
      : `var(--purplish-blue)`};
  color: ${(props) =>
    props.$buttonType === 'next'
      ? `var(--white)`
      : props.$buttonType === 'prev'
      ? `var(--cool-gray)`
      : 'var(--white)'};
  border: none;
  outline: none;
  padding: 0.7rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  font-weight: var(--font-lg);
  &:hover {
    background-color: ${(props) =>
      props.$buttonType === 'next'
        ? `var(--purplish-blue)`
        : props.$buttonType === 'prev'
        ? 'transparent'
        : 'var(--purplish-blue)'};
    color: ${(props) =>
      props.$buttonType === 'next'
        ? `var(--white)`
        : props.$buttonType === 'prev'
        ? `var(--marine-blue)`
        : 'var(--cool-gray)'};
  }
`;

export default Button;
