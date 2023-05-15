import React from "react";

const Slider = () => {
  return (
    <div className="slide">
      <div className="testimonial">
        <h5 className="testimonial__header">
          Finally free from old-school banks
        </h5>
        <blockquote className="testimonial__text">
          Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt
          commodi architecto numquam omnis nulla autem, necessitatibus
          blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod
          maiores ipsa minus consequatur error sunt, deleniti saepe aliquid quos
          inventore sequi. Necessitatibus id alias reiciendis, perferendis
          facere.
        </blockquote>
        <address className="testimonial__author">
          <img src="img/user-3.jpg" alt="" className="testimonial__photo" />
          <h6 className="testimonial__name">Francisco Gomes</h6>
          <p className="testimonial__location">Lisbon, Portugal</p>
        </address>
      </div>
    </div>
  );
};

export default Slider;
