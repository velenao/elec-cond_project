import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useTop } from "pages/helpers/helpers";
import { ElecFullPrice } from "entities/electric/ui/elecFullPrice";

export const ElectricFullPrice = ({ top }) => {
  useTop(top);
  return (
    <>
      <div className="fullPrice">
        <Link className="backLink" to={"/electric#elecPrice"}>
          Назад
        </Link>
        <h2>Прайс-лист:</h2>
        <ElecFullPrice />
      </div>
    </>
  );
};
