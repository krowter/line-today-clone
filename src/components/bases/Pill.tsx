import styled from "styled-components";

export const Pill = styled.div<{
  isActive?: boolean;
  background?: string;
  size?: string;
}>`
  display: inline-block;
  border-radius: ${({ theme }) => theme.size.xs};
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

  ${({ theme, isActive = true, background }) =>
    isActive &&
    ` background: ${theme.color[background || "white"]} !important; 
      color: ${theme.color.light}`};
`;
