import { condImgCarousel } from "../../data/condImgCarousel";
import React from "react";
import { Carousel } from "shared/global/ui/carousel";

export const CondCarousel = () => {
  console.log(condImgCarousel);
  return <Carousel imgCarousel={condImgCarousel} />;
};
