import { useElecServices } from "entities/electric/helpers/ElecHelpers";
import React from "react";
import { FullPrice } from "entities/global/ui/fullPrice";

export const ElecFullPrice = ({ isShort }) => {
  const services = useElecServices();

  return (
    <>
      {isShort && <h2 id="elecPrice">Прайс</h2>}
      <FullPrice data={services} path="electric" isShort={isShort} />
    </>
  );
};
