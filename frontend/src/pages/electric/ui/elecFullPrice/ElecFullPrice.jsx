import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { ElecFullPrice } from "entities/electric/ui/elecFullPrice";

export const ElectricFullPrice = () => {
  return (
    <>
      <div className="fullPrice">
        <Link className="backLink" to={"/electric"}>
          Назад
        </Link>
        <h2>Прайс-лист:</h2>
        <ElecFullPrice />
      </div>
    </>
  );
};
