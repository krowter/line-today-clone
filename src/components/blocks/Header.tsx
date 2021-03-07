import styled from "styled-components";

const Logo = styled.span`
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const Header: React.FC = () => {
  return (
    <header>
      <Logo>Len Tudei</Logo>
    </header>
  );
};
