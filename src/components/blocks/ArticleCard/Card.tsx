import styled from "styled-components";

export const Card = styled.div<{ type: string }>`
  max-width: ${({ theme, type }) =>
    type === "row-card" ? "100%" : theme.size["2xl"]};

  flex-basis: ${({ theme, type }) =>
    type === "regular" && `calc(50% - ${theme.size.sm})`};

  display: ${({ type }) => (type === "row-card" ? "flex" : "block")};
  flex-direction: row;

  & > div {
    margin-left: ${({ theme, type }) =>
      type === "row-card" && theme.size["2xs"]};
  }

  .badge-text {
    margin-right: 0.25rem;
  }

  .title {
    display: block;
    margin-top: ${({ theme }) => theme.size["3xs"]};
    margin-bottom: ${({ theme }) => theme.size["2xs"]};
  }

  .publisher {
    color: ${({ theme }) => theme.color.darkGray};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const CardMedia = styled.img<{ type: string }>`
  border-radius: ${({ theme }) => theme.size["2xs"]};
  min-width: ${({ theme, type }) => type === "row-card" && theme.size.lg};
  height: ${({ theme, type }) => type === "regular" && theme.size["xl"]};

  object-fit: cover;
  width: 100%;

  max-height: ${({ theme, type }) => type === "row-card" && theme.size["md"]};
`;
