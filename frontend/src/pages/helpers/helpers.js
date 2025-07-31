import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
      }, 70);
    }
  }, [location]);
}
