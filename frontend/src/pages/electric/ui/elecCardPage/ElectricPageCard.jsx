import React from "react";
import { ElecTypes } from "entities/electric/ui/elecTypes";
import { Link } from "react-router-dom";
import "./style.css";

export const ElectricPageCard = () => {
  return (
    <>
      <div className="pageCard">
        <Link className="backLink" to={"/electric"}>
          Назад
        </Link>
        <div className="elecTypes">
          <ElecTypes />
        </div>
      </div>
    </>
  );
};
