import React from "react";
import "./style.css";
import { ImgHeader } from "widgets/global/ui/imgHeader";
import { TextAboutUs } from "widgets/global/ui/textAboutUs";
import { CondCards } from "entities/conditioners/ui/condCards";
import { CondCarousel } from "widgets/conditioners/ui/condCarousel";
import { CondFullPrice } from "entities/conditioners/ui/condFullPrice";
import { Contacts } from "shared/global/ui/contacts/Contacts";

export const ConditionersPage = () => {
  return (
    <>
      <ImgHeader />
      <TextAboutUs />
      <CondCards />
      <CondCarousel />
      <CondFullPrice />
      <Contacts />
    </>
  );
};
