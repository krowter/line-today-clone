import styled from "styled-components";

import { getRotation, RotationProps } from "lib/helpers";

type ChevronArrowProps = RotationProps & { size: string };

const Arrow = styled.span<ChevronArrowProps>`
  display: inline-block;
  font-family: Monospace;
  transform: rotate(${(props) => getRotation(props)});
  font-size: ${({ size }) => size};
  transition: 0.2s;
`;

export const ChevronArrow: React.FC<ChevronArrowProps> = ({ ...props }) => {
  return <Arrow {...props}>&rsaquo;</Arrow>;
};

export const ChevronArrowContainer = styled.button`
  background: white;
  height: 100%;
  position: absolute;
  right: 0px;
  border: none;
  outline: none;
  cursor: pointer;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  border-left: 1px lightgrey solid;
  top: 0;
`;
