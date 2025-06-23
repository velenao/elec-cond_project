import React from "react";
import "./style.css";

import image1 from "assets/conditionersAssets/condImg/cond.jpg";
import image2 from "assets/electricAssets/elecImg/elec.jpg";
import image3 from "assets/electricAssets/elecImg/socket.jpg";

const images = [
  { src: image1, alt: "Image 1" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
];

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex >= images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const previousIndex = activeIndex > 0 ? activeIndex - 1 : images.length - 1;

  const nextIndex = activeIndex < images.length - 1 ? activeIndex + 1 : 0;

  return (
    <div className="carousel-container">
      <button
        type="button"
        onClick={() => setActiveIndex(previousIndex)}
        className="carousel-button carousel-left"
      ></button>

      <div className="carousel-images">
        <div className="carousel-item prev">
          <img
            src={images[previousIndex].src}
            alt={images[previousIndex].alt}
          />
        </div>
        <div className="carousel-item center active">
          <img src={images[activeIndex].src} alt={images[activeIndex].alt} />
        </div>
        <div className="carousel-item next">
          <img src={images[nextIndex].src} alt={images[nextIndex].alt} />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setActiveIndex(nextIndex)}
        className="carousel-button carousel-right"
      ></button>
    </div>
  );
};
