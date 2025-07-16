import React from "react";
import { CondTypes } from "entities/conditioners/ui/condTypes";
import { Link } from "react-router-dom";
import "./style.css";

export const ConditionersPageCard = () => {
  return (
    <>
      <div className="pageCard">
        <Link className="backLink" to={"/conditioners"}>
          Назад
        </Link>
        <div className="condTypes">
          <CondTypes />
        </div>
      </div>
    </>
  );
};
