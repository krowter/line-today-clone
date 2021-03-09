import styled from "styled-components";

import { fadeIn, fadeOut } from "styles/animations";

const fadeSideIn = fadeIn("RIGHT", "30px");
const fadeSideOut = fadeOut("LEFT", "30px");

export const ArticleSectionContainer = styled.section<{ mounted: boolean }>`
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  animation: ${({ mounted }) => (mounted ? fadeSideOut : fadeSideIn)} 0.4s
    ease-in-out both;
`;

export const SectionContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
