import React, { useContext, useEffect, useRef } from "react";
import { svg } from "../../assets/svgs";
import { Img } from "../shared";
import { image } from "../../assets/images";
import { context } from "../../store/context";

const Features: React.FC = (props) => {
  const { fnFeatureSectionRef } = useContext(context);
  const featureSectionRef = useRef(null);
  /*  const digitalImgRef = useRef(null);
  const growImgRef = useRef(null);
  const cardImgRef = useRef(null); */

  useEffect(() => {
    fnFeatureSectionRef(featureSectionRef);
  });

  /*  useEffect(() => {
    const currents = [
      digitalImgRef.current,
      growImgRef.current,
      cardImgRef.current,
    ];
    const callBack: IntersectionObserverCallback = (entries, observer) => {
      const [entry] = entries;
      // console.log(entry);

      if (!entry.isIntersecting) return;
      // console.log(entry.target.);

      observer.unobserve(entry.target);
    };

    const headerObserver = new IntersectionObserver(callBack, {
      root: null,
      threshold: 0,
      rootMargin: `200px`,
    });

    currents.forEach((current) => {
      if (current) headerObserver.observe(current);
    });
  }, [digitalImgRef, growImgRef]);
 */
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
            src={image.digital}
            // data-src={image.digital}
            alt="Computer"
            // ref={digitalImgRef}
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
            src={image.grow}
            // data-src="img/grow.jpg"
            alt="Plant"
            // ref={growImgRef}
            className="features__img lazy-img"
          />

          <Img
            src={image.card}
            // data-src="img/card.jpg"
            alt="Credit card"
            // ref={cardImgRef}
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
