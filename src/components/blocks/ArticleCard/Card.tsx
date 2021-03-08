import styled from "styled-components";
import { transparentize } from "lib/helpers";

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
  font-size: ${({ theme }) => `calc(${theme.fontSize["xs"]} + 0.1rem)`};

  ${({ theme, type }) => {
    switch (type) {
      case "row-card":
        return `max-width: 100%; 
          @media(max-width: 1024px) {
          }
          a { display: flex; }
          & > a > div { margin-left: ${theme.size["2xs"]}; }`;

      case "regular":
        return `max-width: ${theme.size[" xl"]}; 
        flex-basis: calc(50% - ${theme.size.sm});
        margin-bottom: ${theme.size.sm}; 
        a { display: block; }`;
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
        height: calc(${theme.size["md"]} + 1rem)};
        display: flex;
        & > div { margin-left: ${theme.size["2xs"]}; }`;

      case "regular":
        return `@media(min-width: 768px) {
          height: ${theme.size["xl"]};
        }
        @media(max-width: 767px) {
          height: calc(${theme.size["md"]} + 1rem);
        }`;
      default:
        break;
    }
  }}
`;

export const AdvertisingCard = styled.div<{ backgroundImage: string }>`
  text-align: center;
  color: white;
  background: linear-gradient(
      ${({ theme }) => transparentize(theme.color.calmgreen)},
      ${({ theme }) => theme.color.calmgreen}
    ),
    ${({ backgroundImage }) => `url(${backgroundImage})`};
  border-radius: ${({ theme }) => theme.size["2xs"]};
  padding: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  margin-bottom: ${({ theme }) => theme.size.xs};
  margin-top: ${({ theme }) => theme.size.xs};
`;

export const SectionLinkCard = styled.a<{ backgroundImage: string }>`
  display: block;
  width: 47.5%;
  cursor: pointer;

  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  color: white;
  background: linear-gradient(
      ${({ theme }) => transparentize(theme.color.skyblue, 40)},
      ${({ theme }) => theme.color.skyblue}
    ),
    ${({ backgroundImage }) => `url(${backgroundImage})`};
  text-align: center;
  background-position: center;

  border-radius: ${({ theme }) => theme.size["2xs"]};
  padding: 1.5rem;
  margin-bottom: ${({ theme }) => theme.size.xs};
  margin-top: ${({ theme }) => theme.size.xs};
`;
