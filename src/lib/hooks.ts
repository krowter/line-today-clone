import { RefObject, useEffect, useState } from "react";

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

interface SwipeEvents {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export const useSwipeSideways = (
  elementId: string,
  events: SwipeEvents,
  offset = 80 // how much pixels to trigger swipe event
) => {
  const [originX, setOriginX] = useState(0);
  const [endpointX, setEndpointX] = useState(0);

  const handleTouchStart = (e: TouchEvent) => setOriginX(e.touches[0].pageX);

  const handleTouchEnd = (e: TouchEvent) =>
    setEndpointX(e.changedTouches[0].pageX);

  useEffect(() => {
    if (endpointX !== 0 && originX !== 0) {
      if (endpointX - originX > offset) events.onSwipeLeft();
      if (originX - endpointX > offset) events.onSwipeRight();

      //reset coordinates from previous swipe events
      setOriginX(0);
      setEndpointX(0);
    }
  }, [endpointX, originX]);

  useEffect(() => {
    const element = document.getElementById(elementId);

    if (element) {
      element.addEventListener("touchstart", handleTouchStart);
      element.addEventListener("touchend", handleTouchEnd);

      return () => {
        element.removeEventListener("touchstart", handleTouchStart);
        element.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [elementId]);
};
