import React, { useRef } from "react";
import './index.css'
import usePlayVideo from './playVideo'
import videoCond from '../../../assets/conditionersAssets/condVideo/cond.mp4'
// import videoElec from './'
import elecImg from '../../../assets/electricAssets/elecImg/elec.jpg'
import condImg from '../../../assets/conditionersAssets/condImg/cond.png'



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
            <a className="link" href="/electric">
              <video className="main_video" id="video_electric" ref={vidRefElec} loop muted></video>
              <img src={elecImg} alt="элетрика" className="img_video"/>
            </a>
            <a className="link" href="/conditioners">
              <video className="main_video" id="video_conditioners" ref={vidRefCond} src={videoCond} loop muted></video>
              <img src={condImg} alt="кондиционеры" className="img_video"/>
            </a>
        </div>
      </div>
    </>
  );
};

