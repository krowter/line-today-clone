import { RefObject, useEffect } from "react";

export const useOnClickOutside = (
  ref: RefObject<any>,
  boundary: string,
  onClickOutside: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        event.clientY > ref.current.getBoundingClientRect()[boundary]
      ) {
        console.log({ rect: ref.current.getBoundingClientRect() });
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
