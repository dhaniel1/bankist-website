import React from "react";
interface Iprop
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  data: any;
}

const SliderItem = (props: Iprop) => {
  const { data } = props;
  return (
    <div className="slide">
      <div className="testimonial">
        <h5 className="testimonial__header">{data.header}</h5>
        <blockquote className="testimonial__text">{data.body}</blockquote>
        <address className="testimonial__author">
          <img src={data.img} alt="" className="testimonial__photo" />
          <h6 className="testimonial__name"> {data.name}</h6>
          <p className="testimonial__location"> {data.location}</p>
        </address>
      </div>
    </div>
  );
};

export default SliderItem;
