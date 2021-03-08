import { keyframes } from "styled-components";

import { getAnimationDirection, Direction } from "lib/helpers";

export const fadeIn = (direction: Direction) => keyframes`
  0% {
    opacity: 0;
    ${getAnimationDirection(direction)}
  }
  100% {
    opacity: 1;
    margin-${
      direction === "LEFT" || direction === "RIGHT" ? "right" : "top"
    }: 0px;
  }
  `;

export const fadeOut = (direction: Direction) => keyframes`
  0% {
    opacity: 1;
    margin-bottom: 0px;
  }
  100% {
    opacity: 0;
    ${getAnimationDirection(direction)}
  }
`;
