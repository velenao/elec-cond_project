import React from "react";
import { ElecTypes } from "entities/electric/ui/elecTypes";
import { Link } from "react-router-dom";
import "./style.css";
import { useTop } from "pages/helpers/helpers";

export const ElectricPageCard = ({ top }) => {
  useTop(top);
  return (
    <>
      <div className="pageCard">
        <Link className="backLink" to={"/electric#elecServices"}>
          Назад
        </Link>
        <ElecTypes />
      </div>
    </>
  );
};
