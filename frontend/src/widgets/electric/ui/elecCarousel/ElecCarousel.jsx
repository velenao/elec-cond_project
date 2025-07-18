import { elecImgCarousel } from "../../data/elecImgCarousel";
import React from "react";
import { Carousel } from "shared/global/ui/carousel";

export const ElecCarousel = () => {
  return <Carousel imgCarousel={elecImgCarousel} />;
};
