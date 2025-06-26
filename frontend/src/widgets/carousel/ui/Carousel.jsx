import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { usePrevNextButtons } from "./CarouselNavigation";
import { imagesCarousel } from "../data/imagesCarousel";
import "./style.css";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;
    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <div className="carousel-container">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {imagesCarousel.map(({ src, alt }) => (
              <div className="embla__slide" key={alt}>
                <img src={src} alt={alt} className="embla__slide__image" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="carousel-controls">
        <button
          className="carousel-button carousel-left"
          type="button"
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        ></button>
        <button
          className="carousel-button carousel-right"
          type="button"
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        ></button>
      </div>
    </div>
  );
};
