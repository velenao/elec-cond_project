import React from "react";
import "./style.css";
import { ImgHeader } from "widgets/ui/imgHeader";
import { TextAboutUs } from "widgets/ui/textAboutUs";
import { CondCards } from "entities/conditioners/ui/condCards";
import { Carousel } from "entities/conditioners/ui/carousel";

export const ConditionersPage = () => {
  return (
    <>
      <ImgHeader />
      <TextAboutUs />
      <CondCards />
      <Carousel />
    </>
  );
};
