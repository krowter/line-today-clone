export interface DirectionProps {
  upwardIf?: boolean;
  leftwardIf?: boolean;
  downwardIf?: boolean;
  rightwardIf?: boolean;
}

export const getDirection = (
  props: DirectionProps,
  initialDirection = 0 /* take right direction as 0 degrees */
) => {
  const unit = "deg";
  if (props.leftwardIf) return 180 + initialDirection + unit;
  if (props.downwardIf) return 90 + initialDirection + unit;
  if (props.upwardIf) return 270 + initialDirection + unit;
};

export const handleFetchErrors = (response: Response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
