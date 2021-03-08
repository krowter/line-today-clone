import styled from "styled-components";

export const Card = styled.div<{ type: string }>`
  .badge-text {
    margin-right: 0.25rem;
  }

  .title {
    display: block;
    margin-top: ${({ theme }) => theme.size["3xs"]};
    margin-bottom: ${({ theme }) => theme.size["2xs"]};
  }

  .publisher {
    color: ${({ theme }) => theme.color.darkgray};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  flex-direction: row;

  ${({ theme, type }) => {
    switch (type) {
      case "row-card":
        return `max-width: 100%; 
                display: flex;
                & > div { margin-left: ${theme.size["2xs"]}; }`;

      case "regular":
        return `max-width: ${theme.size["2xl"]}; 
                display: block; 
                flex-basis: calc(50% - ${theme.size.sm}); `;
      default:
        break;
    }
  }}
`;

export const CardMedia = styled.img<{ type: string }>`
  border-radius: ${({ theme }) => theme.size["2xs"]};
  object-fit: cover;
  width: 100%;

  ${({ theme, type }) => {
    switch (type) {
      case "row-card":
        return `min-width: ${theme.size.lg};
                max-width: ${theme.size.lg};
                margin-bottom: ${theme.size.xs};
                height: ${theme.size["md"]};
                display: flex;
                & > div { margin-left: ${theme.size["2xs"]}; }`;

      case "regular":
        return `height: ${theme.size["xl"]};`;
      default:
        break;
    }
  }}
`;
