import React from "react";
import { Link } from "react-router-dom";
import { FullPrice } from "entities/conditioners/ui/fullPrice";

export const ConditionersFullPrice = () => {
  return (
    <>
      <Link to={"/conditioners"}>Назад</Link>
      страница прайса
      <FullPrice />
    </>
  );
};
