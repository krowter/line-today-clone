import styled from "styled-components";

import { fadeIn, fadeOut } from "styles/animations";

const fadeSideIn = fadeIn("LEFT");
const fadeSideOut = fadeOut("RIGHT");

export const ArticleSectionContainer = styled.section<{ mounted: boolean }>`
  margin-left: 1rem;
  margin-right: 1rem;

  animation: ${({ mounted }) => (mounted ? fadeSideOut : fadeSideIn)} 0.4s
    ease-in-out both;
`;

export const SectionContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
