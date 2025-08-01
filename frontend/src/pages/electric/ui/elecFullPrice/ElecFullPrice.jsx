import React from "react";
import { useTop } from "pages/helpers/helpers";
import { ElecFullPrice } from "entities/electric/ui/elecFullPrice";
import { Backlink } from "shared/global/ui/backlink";

export const ElectricFullPrice = ({ top }) => {
  useTop(top);
  return (
    <>
      <div className="pageFullPrice">
        <Backlink id="elecPrice" />
        <h2>Прайс-лист:</h2>
        <ElecFullPrice />
      </div>
    </>
  );
};
