import styled from "styled-components";

const Logo = styled.img`
  padding: 0.75rem;
  box-sizing: border-box;
  height: 60px;
`;

export const Header: React.FC = () => {
  return (
    <header>
      <Logo src="/static/logo.png" />
    </header>
  );
};
