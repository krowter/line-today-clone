import styled, { keyframes } from "styled-components";

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    margin-top: -10px;
  }
  100% {
    opacity: 1;
    margin-top: 0px;
  }
`;

const fadeOutUp = keyframes`
  0% {
    opacity: 1;
    margin-top: 0px;
  }
  100% {
    opacity: 0;
    margin-top: -10px;
  }
`;

export const CollapsedTabsContainer = styled.div`
  position: relative;
  border-bottom: 1px lightgrey solid;
`;

export const UncollapsedTabsContainer = styled.div<{ mounted: boolean }>`
  animation: ${({ mounted }) => (mounted ? fadeOutUp : fadeInDown)} 0.3s
    ease-in-out both;
`;
