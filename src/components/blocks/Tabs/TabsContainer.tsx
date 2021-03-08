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
  background: ${({ theme }) => theme.color.white};
`;

export const UncollapsedTabsContainer = styled.div<{ mounted: boolean }>`
  padding: 0.75rem;
  animation: ${({ mounted }) => (mounted ? fadeOutUp : fadeInDown)} 0.4s
    ease-in-out both;
  position: absolute;
  background: ${({ theme }) => theme.color.white};
`;
