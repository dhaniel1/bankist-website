import React from "react";
import { Button, Input } from "../shared";

interface Iprop
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

const Form = (props: Iprop) => {
  return (
    <>
      <form className="modal__form">
        <Input type="text" label={"First Name"} />
        <Input type="text" label={"Last Name"} />
        <Input type="email" label={"Email Address"} />
        <Button className="btn">Next step &rarr;</Button>
      </form>
    </>
  );
};

export default Form;
