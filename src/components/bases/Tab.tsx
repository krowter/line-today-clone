import styled from "styled-components";

export const Tab = styled.div<{ isActive?: boolean }>`
  display: inline-block;
  padding: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color.darkGray};

  &:hover {
    color: ${({ theme }) => theme.color.dark};
  }

  border-bottom: 3px solid transparent;

  ${({ isActive, theme }) =>
    isActive &&
    `font-weight: ${theme.fontWeight.semibold}; 
    border-bottom: 3px solid black;
    color: ${theme.color.dark}`};
`;
