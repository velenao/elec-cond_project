import React from "react";
import "./style.css";
import { useTop } from "pages/helpers/helpers";
import { CondFullPrice } from "entities/conditioners/ui/condFullPrice";
import { Backlink } from "shared/global/ui/backlink";

export const ConditionersFullPrice = ({ top }) => {
  useTop(top);
  return (
    <>
      <div className="fullPrice">
        <Backlink id="condPrice" />
        <h2>Прайс-лист:</h2>
        <CondFullPrice />
      </div>
    </>
  );
};
