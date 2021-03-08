import styled from "styled-components";
import { fadeIn, fadeOut } from "styles/animations";

const fadeInDown = fadeIn("UP");
const fadeOutUp = fadeOut("UP");

export const CollapsedTabsContainer = styled.div`
  position: relative;
  border-bottom: 1px lightgrey solid;
  background: ${({ theme }) => theme.color.white};
`;

export const UncollapsedTabsContainer = styled.div<{ mounted: boolean }>`
  padding: 0.75rem;
  animation: ${({ mounted }) => (mounted ? fadeOutUp : fadeInDown)} 0.4s
    ease-in-out both;
  z-index: 2;
  position: absolute;
  background: ${({ theme }) => theme.color.white};

  &::after {
    height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    display: block;
    content: "";
    opacity: 0.8;
    background: ${({ theme }) => theme.color.darkgray};
  }
`;
