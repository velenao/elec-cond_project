import { useEffect } from "react";

export default function usePlayVideo(ref) {
  useEffect(() => {
    const element = ref?.current;
    if (!element) return;

    const mouseEnter = () => element.play();
    const mouseLeave = () => {
      element.pause();
      element.currentTime = 0;
    };

    element.addEventListener("mouseenter", mouseEnter);
    element.addEventListener("mouseleave", mouseLeave);

    return () => {
      element.removeEventListener("mouseenter", mouseEnter);
      element.removeEventListener("mouseleave", mouseLeave);
    };
  }, [ref]);
  return ref;
}
