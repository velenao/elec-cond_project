import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { CondFullPrice } from "entities/conditioners/ui/condFullPrice";

export const ConditionersFullPrice = () => {
  return (
    <>
      <div className="fullPrice">
        <Link className="backLink" to={"/conditioners"}>
          Назад
        </Link>
        <h2>Прайс-лист:</h2>
        <CondFullPrice />
      </div>
    </>
  );
};
