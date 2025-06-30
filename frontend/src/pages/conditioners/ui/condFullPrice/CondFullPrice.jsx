import React from "react";
import { Link } from "react-router-dom";
import { CondFullPrice } from "entities/conditioners/ui/condFullPrice";

export const ConditionersFullPrice = () => {
  return (
    <>
      <Link to={"/conditioners"}>Назад</Link>
      страница прайса
      <CondFullPrice />
    </>
  );
};
