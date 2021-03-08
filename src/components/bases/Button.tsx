import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.color.lightgray};
  border: none;
  border-radius: ${({ theme }) => theme.size["2xs"]};
  padding: ${({ theme }) => theme.size["2xs"]};
  margin-top: ${({ theme }) => theme.size["sm"]};
  margin-bottom: ${({ theme }) => theme.size["md"]};
`;

export const ReadMoreButton = styled(Button)`
  margin-left: auto;
  margin-right: auto;
`;
