import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useTop } from "pages/helpers/helpers";
import { CondFullPrice } from "entities/conditioners/ui/condFullPrice";

export const ConditionersFullPrice = ({ top }) => {
  useTop(top);
  return (
    <>
      <div className="fullPrice">
        <Link className="backLink" to={"/conditioners#condPrice"}>
          Назад
        </Link>
        <h2>Прайс-лист:</h2>
        <CondFullPrice />
      </div>
    </>
  );
};
