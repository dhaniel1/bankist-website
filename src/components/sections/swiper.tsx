import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function SwiperComponent() {
  return (
    <div>
    <CarouselProvider
      naturalSlideWidth={10}
      naturalSlideHeight={12.5}
      totalSlides={3}>
      <Slider>
        <Slide style={{border: '3px solid blue', height: '350px'}} index={0}>I am the first Slide.</Slide>
        <Slide style={{border: '3px solid blue', height: '350px'}} index={1}>I am the second Slide.</Slide>
        <Slide style={{border: '3px solid blue', height: '350px'}} index={2}>I am the third Slide.</Slide>
      </Slider>
      <ButtonBack style={{height: '300px', position: 'absolute', background: 'red', top: 0}}>Back</ButtonBack>
      <ButtonNext style={{height: '300px', position: 'absolute', background: 'red', top: 0, right: 0}}>Next</ButtonNext>
    </CarouselProvider>
    </div>
  );
}
export default SwiperComponent;
