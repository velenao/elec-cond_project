import React from "react";
import { ImgHeader } from "widgets/global/ui/imgHeader";
import { TextAboutUs } from "widgets/global/ui/textAboutUs";
import { CondCards } from "entities/conditioners/ui/condCards";
import { CondCarousel } from "widgets/conditioners/ui/condCarousel";
import { CondFullPrice } from "entities/conditioners/ui/condFullPrice";
import { Contacts } from "shared/global/ui/contacts/Contacts";
import { useScrollTo } from "pages/helpers/helpers";

export const ConditionersPage = () => {
  useScrollTo();
  return (
    <>
      <ImgHeader />
      <TextAboutUs />
      <CondCards />
      <CondCarousel />
      <CondFullPrice isShort />
      <Contacts main />
    </>
  );
};
