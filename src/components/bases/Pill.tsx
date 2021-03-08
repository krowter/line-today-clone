import styled from "styled-components";

export const Pill = styled.div<{
  isActive?: boolean;
  background?: string;
  color?: string;
  size?: string;
}>`
  display: inline-block;
  border-radius: ${({ theme }) => theme.size.md};
  padding: ${({ theme, size = "xs" }) =>
    `calc(${theme.fontSize[size]} - 0.5rem)`};

  font-size: ${({ theme, size = "md" }) =>
    `calc(${theme.fontSize[size]} - 0.25rem)`};

  border: 1px solid ${({ theme }) => theme.color.gray};

  &:hover {
    background: ${({ theme }) => theme.color.gray};
    cursor: pointer;
  }
  transition: 0.2s;

  color: ${({ theme, color }) => theme.color[color || "white"]}};

  ${({ theme, isActive = true, background }) =>
    isActive &&
    ` background: ${theme.color[background || "white"]} !important; 
      color: ${theme.color.light}`};
`;
