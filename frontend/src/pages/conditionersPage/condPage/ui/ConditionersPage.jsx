import React from "react";
import "./style.css";
import { HeaderImg } from "widgets/headerImg";
import { TextAboutUs } from "widgets/textAboutUs/ui/TextAboutUs";
import { CondCards } from "entities/conditioners/condServicesCards";
import { Carousel } from "widgets/carousel";

export const ConditionersPage = () => {
  return (
    <>
      <HeaderImg />
      <TextAboutUs />
      <CondCards />
      <Carousel />
    </>
  );
};
