import React from "react";
import { ElecTypes } from "entities/electric/ui/elecTypes";
import "./style.css";
import { useTop } from "pages/helpers/helpers";
import { Backlink } from "shared/global/ui/backlink";

export const ElectricPageCard = ({ top }) => {
  useTop(top);
  return (
    <>
      <div className="pageCard">
        <Backlink id="elecServices" />
        <ElecTypes />
      </div>
    </>
  );
};
