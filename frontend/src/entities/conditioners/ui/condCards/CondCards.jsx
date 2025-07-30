import React from "react";
import { useCondServices } from "../../helpers/CondHelpers";
import { Cards } from "entities/global/ui/cards";

export const CondCards = () => {
  const card = useCondServices();

  return (
    <>
      <h2 id="condServices">Услуги</h2>
      <Cards data={card} path="conditioners" />
    </>
  );
};
