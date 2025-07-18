import React from "react";
import "./style.css";
import { ImgHeader } from "widgets/global/ui/imgHeader";
import { TextAboutUs } from "widgets/global/ui/textAboutUs";
import { ElecCards } from "entities/electric/ui/elecCards";
import { ElecCarousel } from "widgets/electric/ui/elecCarousel";
import { ElecFullPrice } from "entities/electric/ui/elecFullPrice";
import { Contacts } from "shared/global/ui/contacts/Contacts";

export const ElectricPage = () => {
  return (
    <>
      <ImgHeader />
      <TextAboutUs />
      <ElecCards />
      <ElecCarousel />
      <ElecFullPrice isShort />
      <Contacts main />
    </>
  );
};
