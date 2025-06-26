import React from "react";
import { CondTypes } from "entities/conditioners/condTypesService";
import { Link } from "react-router-dom";

export const ConditionersPageCard = () => {
  return (
    <>
      <Link to={"/conditioners"}>Назад</Link>
      страница отдельной услуги
      <CondTypes />
    </>
  );
};
