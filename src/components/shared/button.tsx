import React from "react";
interface Iprop
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = (prop: Iprop) => {
  const { children, ...restProp } = prop;
  return <button {...restProp}>{children}</button>;
};

export default Button;
