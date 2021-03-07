import styled from "styled-components";

export const Tab = styled.div<{ isActive?: boolean }>`
  display: inline-block;
  padding: 1rem;
  cursor: pointer;

  ${({ isActive, theme }) =>
    isActive &&
    `font-weight: ${theme.fontWeight.semibold}; border-bottom: 3px solid black;`};
`;
