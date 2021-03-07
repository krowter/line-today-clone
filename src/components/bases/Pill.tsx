import styled from "styled-components";

export const Pill = styled.div`
  border-radius: ${({ theme }) => theme.size.lg};
  background: ${({ theme }) => theme.color.primary};
`;
