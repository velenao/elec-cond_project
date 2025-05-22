import React, { useRef } from "react";
import './index.css'
import videoCond from './cond.mp4'
import videoElec from './elecVideo.mp4'
import usePlayVideo from './playVideo'



export const MainPage = () => {
  const vidRefElec = useRef(null);
  const vidRefCond = useRef(null);

  usePlayVideo(vidRefElec);
  usePlayVideo(vidRefCond);

  return (
    <>
      <div className="main_page">
        <div className="main_title">Профессиональный монтаж и сервисное обслуживание кондиционеров и электрики</div>
        <div className="main_link">
        <div className="link">
            <a href="/electric">
              <video className="main_video" id="video_electric" ref={vidRefElec} src={videoElec} loop muted></video>
            </a>
          </div>
          <div className="link">
            <a href="/conditioners">
              <video className="main_video" id="video_conditioners" ref={vidRefCond} src={videoCond} loop muted></video>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

