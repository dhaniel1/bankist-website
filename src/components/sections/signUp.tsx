import React from "react";
import { Button } from "../shared";

/* interface Iprop
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {} */

const SignUp: React.FC<{ handleClick: () => void }> = (props) => {
  return (
    <>
      <section className="section section--sign-up">
        <div className="section__title">
          <h3 className="section__header">
            The best day to join Bankist was one year ago. The second best is
            today!
          </h3>
        </div>
        <Button onClick={props.handleClick} className="btn btn--show-modal">
          Open your free account today!
        </Button>
      </section>
    </>
  );
};

export default SignUp;
