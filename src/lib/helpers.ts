export interface RotationProps {
  upwardIf?: boolean;
  leftwardIf?: boolean;
  downwardIf?: boolean;
  rightwardIf?: boolean;
}

export const getRotation = (
  props: RotationProps,
  initialDirection = 0 /* take right direction as 0 degrees */
) => {
  const unit = "deg";
  if (props.leftwardIf) return 180 + initialDirection + unit;
  if (props.downwardIf) return 90 + initialDirection + unit;
  if (props.upwardIf) return 270 + initialDirection + unit;
};

export type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

export const getAnimationDirection = (
  direction: Direction,
  amount: string = "20px"
) => {
  switch (direction) {
    case "UP":
      return `margin-top: -${amount}`;
    case "DOWN":
      return `margin-top: ${amount}`;
    case "RIGHT":
      return `margin-right: ${amount}`;
    case "LEFT":
      return `margin-right: -${amount}`;
  }
};

export const handleFetchErrors = (response: Response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const transparentize = (color: string, transparency: number = 50) => {
  const isHexValue = color.startsWith("#");
  let r, g, b;
  const a = 1 - transparency / 100;

  if (isHexValue) {
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5, 7), 16);
  } else {
    const rgbValue = color.replace(/\s/g, "").match(/rgb\((\d+),(\d+),(\d+)\)/);
    if (rgbValue) {
      [, r, g, b] = rgbValue;
    } else {
      return color;
    }
  }

  return `rgba(${r},${g},${b},${a})`;
};
