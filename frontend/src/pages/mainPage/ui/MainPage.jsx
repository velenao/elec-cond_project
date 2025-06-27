import React, { useRef } from "react";
import "./style.css";
import usePlayVideo from "../helpers/helpers";
import videoCond from "assets/conditionersAssets/condVideo/cond.mp4";

export const MainPage = () => {
  const vidRefElec = useRef(null);
  const vidRefCond = useRef(null);

  usePlayVideo(vidRefElec);
  usePlayVideo(vidRefCond);

  return (
    <>
      <div className="main_page">
        <div className="main_title">
          Профессиональный монтаж и сервисное обслуживание кондиционеров и
          электрики
        </div>
        <div className="main_link">
          <a className="link" href="/electric">
            <video
              className="main_video"
              id="video_electric"
              ref={vidRefElec}
              loop
              muted
            ></video>
          </a>
          <a className="link" href="/conditioners">
            <video
              className="main_video"
              id="video_conditioners"
              ref={vidRefCond}
              src={videoCond}
              loop
              muted
            ></video>
          </a>
        </div>
      </div>
    </>
  );
};
