import styled from "styled-components";

const _Header = styled.header`
  background: white;
`;

const Logo = styled.img`
  padding: 0.75rem;
  box-sizing: border-box;
  height: 60px;
`;

export const Header: React.FC = () => {
  return (
    <_Header>
      <Logo src="/static/logo.png" />
    </_Header>
  );
};
