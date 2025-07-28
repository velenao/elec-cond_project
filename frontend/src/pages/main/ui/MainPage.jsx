import React, { useRef } from "react";
import "./style.css";
import usePlayVideo from "../../helpers/helpers";
import condVideo from "assets/conditioners/condVideo/condVideo.mp4";
import elecVideo from "assets/electric/elecVideo/elecVideo.mp4";

export const MainPage = () => {
  const vidRefElec = useRef(null);
  const vidRefCond = useRef(null);

  usePlayVideo(vidRefElec);
  usePlayVideo(vidRefCond);

  return (
    <>
      <div className="main_page">
        <div className="main_title">
          <p className="textTitle">
            <span>
              Профессиональный монтаж и сервисное обслуживание кондиционеров и
              электрики
            </span>
          </p>
        </div>
        <div className="main_link">
          <a className="link" href="/conditioners">
            <video
              className="main_video"
              id="video_conditioners"
              ref={vidRefCond}
              src={condVideo}
              loop
              muted
            ></video>
          </a>
          <a className="link" href="/electric">
            <video
              className="main_video"
              id="video_electric"
              ref={vidRefElec}
              src={elecVideo}
              loop
              muted
            ></video>
          </a>
        </div>
      </div>
    </>
  );
};
