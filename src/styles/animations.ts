import { keyframes } from "styled-components";

import { getAnimationDirection, Direction } from "lib/helpers";

export const fadeIn = (direction: Direction, amount?: string) => keyframes`
  0% {
    opacity: 0;
    ${getAnimationDirection(direction, amount)}
  }
  100% {
    opacity: 1;
    margin-${
      direction === "LEFT" || direction === "RIGHT" ? "right" : "top"
    }: 0px;
  }
  `;

export const fadeOut = (direction: Direction, amount?: string) => keyframes`
  0% {
    opacity: 1;
    margin-bottom: 0px;
  }
  100% {
    opacity: 0;
    ${getAnimationDirection(direction, amount)}
  }
`;
