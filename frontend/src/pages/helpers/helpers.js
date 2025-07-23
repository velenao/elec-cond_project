import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

export function useTop(top) {
  useEffect(() => {
    if (top) {
      window.scrollTo({
        top: 0,
      });
    }
  }, [top]);

  return null;
}

export function useScrollTo() {
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const scroll = element.offsetTop - 25;
          window.scrollTo({ top: scroll, behavior: "smooth" });
        }
      }, 50);
    }
  }, [location]);
}
