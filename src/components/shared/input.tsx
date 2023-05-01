import React from "react";
interface Iprop
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const Input = (props: Iprop) => {
  const { label, id, type, ...restProps } = props;
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input {...restProps} />
    </>
  );
};

export default Input;
