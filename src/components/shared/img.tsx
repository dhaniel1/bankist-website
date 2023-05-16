import React from "react";
interface Iprop
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Img = React.forwardRef<HTMLImageElement, Iprop>((prop: Iprop, ref) => {
  return (
    <img ref={ref} {...prop}>
      {prop.children}
    </img>
  );
});

export default Img;
