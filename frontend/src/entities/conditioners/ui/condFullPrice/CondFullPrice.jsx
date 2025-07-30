import { useCondServices } from "entities/conditioners/helpers/CondHelpers";
import React from "react";
import { FullPrice } from "entities/global/ui/fullPrice";

export const CondFullPrice = ({ isShort }) => {
  const services = useCondServices();

  return (
    <>
      {isShort && <h2 id="condPrice">Прайс</h2>}
      <FullPrice data={services} path="conditioners" isShort={isShort} />
    </>
  );
};
