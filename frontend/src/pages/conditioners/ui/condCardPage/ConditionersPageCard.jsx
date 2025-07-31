import React from "react";
import { CondTypes } from "entities/conditioners/ui/condTypes";
import { useTop } from "pages/helpers/helpers";
import "./style.css";
import { Backlink } from "shared/global/ui/backlink";

export const ConditionersPageCard = ({ top }) => {
  useTop(top);
  return (
    <>
      <div className="pageCard">
        <Backlink id="condServices" />
        <CondTypes />
      </div>
    </>
  );
};
