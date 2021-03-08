import styled from "styled-components";

export const Pill = styled.div<{ isActive: boolean }>`
  display: inline-block;
  border-radius: ${({ theme }) => theme.size.xs};
  padding: 0.75rem;

  border: 1px solid ${({ theme }) => theme.color.gray};

  &:hover {
    background: ${({ theme }) => theme.color.gray};
    cursor: pointer;
  }

  transition: 0.2s;

  ${({ isActive, theme }) =>
    isActive &&
    ` background: ${theme.color.dark} !important; 
      color: ${theme.color.light}`};
`;
