import React from "react";
interface Iprop
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Img = (prop: Iprop) => {
  return <img {...prop}>{prop.children}</img>;
};

export default Img;
