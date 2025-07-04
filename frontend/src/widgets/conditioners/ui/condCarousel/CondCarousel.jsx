import { condImgCarousel } from "../../data/condImgCarousel";
import React from "react";
import { Carousel } from "shared/global/ui/carousel";

export const CondCarousel = () => {
  return <Carousel imgCarousel={condImgCarousel} />;
};
