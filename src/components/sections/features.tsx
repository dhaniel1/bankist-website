import React, { useContext, useEffect, useRef } from "react";
import { svg } from "../../assets/svgs";
import { Img } from "../shared";
import { image } from "../../assets/images";
import { context } from "../../store/context";

const Features: React.FC = (props) => {
  const ctx = useContext(context);
  const featureSectionRef = useRef(null);

  useEffect(() => {
    ctx.fnFeatureSectionRef(featureSectionRef);
  });

  return (
    <>
      <section className="section" ref={featureSectionRef} id="section--1">
        <div className="section__title">
          <h2 className="section__description">Features</h2>
          <h3 className="section__header">
            Everything you need in a modern bank and more.
          </h3>
        </div>

        <div className="features">
          <Img
            src={image.digitalLazy}
            data-src="img/digital.jpg"
            alt="Computer"
            className="features__img lazy-img"
          />
          <div className="features__feature">
            <div className="features__icon">
              <svg>
                <use xlinkHref={`${svg.icons}#icon-monitor`}></use>
              </svg>
            </div>
            <h5 className="features__header">100% digital bank</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              alias sint quos? Accusantium a fugiat porro reiciendis saepe
              quibusdam debitis ducimus.
            </p>
          </div>

          <div className="features__feature">
            <div className="features__icon">
              <svg>
                {<use xlinkHref={`${svg.icons}#icon-trending-up`}></use>}
              </svg>
            </div>
            <h5 className="features__header">Watch your money grow</h5>
            <p>
              Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
              inventore ab? Nulla incidunt eius numquam sequi iste pariatur
              quibusdam!
            </p>
          </div>
          <Img
            src={image.growLazy}
            data-src="img/grow.jpg"
            alt="Plant"
            className="features__img lazy-img"
          />

          <Img
            src={image.cardLazy}
            data-src="img/card.jpg"
            alt="Credit card"
            className="features__img lazy-img"
          />
          <div className="features__feature">
            <div className="features__icon">
              <svg>
                {<use xlinkHref={`${svg.icons}#icon-credit-card`}></use>}
              </svg>
            </div>
            <h5 className="features__header">Free debit card included</h5>
            <p>
              Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
              eveniet consequatur odit quam quos possimus assumenda dicta fuga
              inventore ab.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
