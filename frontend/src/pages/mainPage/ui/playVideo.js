// import { useEffect, useRef } from "react"

// export const usePlayVideo = () => {
// const videoRef = useRef(null)

// useEffect(() => {
//     if (videoRef.current) {
//         videoRef.addEventListener('mouseenter', () => {
//             videoRef.play();
//           })
    
//         videoRef.current.addEventListener("mouseleave", () => {
//                 videoRef.pause()
//             })

//         return () => {
//             videoRef.removeEventListener('mouseenter', () => {})
//             videoRef.removeEventListener('mouseleave', () => {})

//         }

//     }
// }, [])
// return videoRef
// }

// function playVideo() {
//     const vid = document.getElementById('video_conditioners'); 
    
//     vid.addEventListener('mouseenter', function() {
//      vid.play();
//      });
//      vid.addEventListener('mouseleave', function() {
//        vid.pause();
//      });
//    }

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