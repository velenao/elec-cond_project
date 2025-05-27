import { useEffect} from "react";

export default function usePlayVideo(ref) {
  useEffect(() => {
    
    ref.current.addEventListener('mouseenter', () => ref.current.play());
    ref.current.addEventListener('mouseleave', () => ref.current.pause());

    return () => {
      ref.removeEventListener('mouseenter', () => {});
      ref.removeEventListener('mouseleave', () => {});
    };
  }, [ref]);

  return ref;
}