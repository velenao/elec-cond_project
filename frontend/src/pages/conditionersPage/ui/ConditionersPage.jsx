import React from "react";
import "./style.css";
import { HeaderImg } from "widgets/headerImg";
import { TextAboutUs } from "widgets/textAboutUs/ui/TextAboutUs";
import { CardServices } from "entities/condServices/ui/cardServices";

export const ConditionersPage = () => {
  return (
    <>
      <HeaderImg />
      <TextAboutUs />
      <CardServices />
    </>
  );
};
