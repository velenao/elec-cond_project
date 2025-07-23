import React from "react";
import { CondTypes } from "entities/conditioners/ui/condTypes";
import { Link } from "react-router-dom";
import { useTop } from "pages/helpers/helpers";
import "./style.css";

export const ConditionersPageCard = ({ top }) => {
  useTop(top);
  return (
    <>
      <div className="pageCard">
        <Link className="backLink" to={"/conditioners#condServices"}>
          Назад
        </Link>
        <div className="condTypes">
          <CondTypes />
        </div>
      </div>
    </>
  );
};
