import React from "react";
import "./style.css";
import { useLocation } from "react-router";

import socket from "assets/electric/elecImg/elecImg.jpg";
import cond from "assets/conditioners/condImg/condImg.jpg";

export const ImgHeader = () => {
  const location = useLocation();

  return (
    <div className="headerImg">
      {location.pathname === "/electric" && <img src={socket} alt="" />}
      {location.pathname === "/conditioners" && <img src={cond} alt="" />}
    </div>
  );
};
