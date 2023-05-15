import React from "react";
import SwiperComponent from "./swiper";

const Testimonials: React.FC = () => {
  return (
    <>
      <section className="section" id="section--3">
        <div className="section__title section__title--testimonials">
          <h2 className="section__description">Not sure yet?</h2>
          <h3 className="section__header">
            Millions of Bankists are already making their lifes simpler.
          </h3>
        </div>

        <div className="slider">
          <SwiperComponent />
          {/*       <button className="slider__btn slider__btn--left">&larr;</button>
          <button className="slider__btn slider__btn--right">&rarr;</button> */}
          <div className="dots"></div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
