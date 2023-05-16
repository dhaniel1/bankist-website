import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { testimonialsData } from "../shared/contentData";
import SliderItem from "./slider";

function SwiperComponent() {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={12.5}
        totalSlides={3}
        infinite={true}>
        <Slider>
          {testimonialsData.map((testimonial, i) => {
            return (
              <Slide index={i} key={i}>
                <SliderItem data={testimonial} />
              </Slide>
            );
          })}
        </Slider>
        <ButtonBack className="slider__btn slider__btn--left">
          &larr;
        </ButtonBack>
        <ButtonNext className="slider__btn slider__btn--right">
          &rarr;
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}
export default SwiperComponent;
