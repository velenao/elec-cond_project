import React from "react";
import "./style.css";
import img from "../../../assets/conditionersAssets/condImg/cond.jpg";

import { useGetCondInfo } from "../model/getCondInfo";

export const CardServices = () => {
  const data = useGetCondInfo();
  return (
    <>
      <div className="cardTitle">
        <a href="/">
          {data.map((item) => (
            <div key={item._id}>
              {" "}
              {item.title}
              <img width="50px" src={img} alt=""></img>
            </div>
          ))}
        </a>
      </div>
    </>
  );
};
