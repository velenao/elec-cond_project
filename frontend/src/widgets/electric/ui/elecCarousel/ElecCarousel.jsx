import { elecImgCarousel } from "../../data/elecImgCarousel";
import React from "react";
import { Carousel } from "shared/global/ui/carousel";

export const ElecCarousel = () => {
  return (
    <>
      <h2 id="elecCarousel">Работы</h2>
      <Carousel imgCarousel={elecImgCarousel} />
    </>
  );
};
