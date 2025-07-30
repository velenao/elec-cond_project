import React from "react";
import { useElecServices } from "../../helpers/ElecHelpers";
import { Cards } from "entities/global/ui/cards";

export const ElecCards = () => {
  const card = useElecServices();

  return (
    <>
      <h2 id="elecServices">Услуги</h2>
      <Cards data={card} path="electric" />
    </>
  );
};
