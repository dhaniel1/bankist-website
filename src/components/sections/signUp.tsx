import React, { useContext } from "react";
import { Button } from "../shared";
import { modalContext } from "../../store";

const SignUp: React.FC = () => {
  const modalCtx = useContext(modalContext);
  return (
    <>
      <section className="section section--sign-up">
        <div className="section__title">
          <h3 className="section__header">
            The best day to join Bankist was one year ago. The second best is
            today!
          </h3>
        </div>
        <Button
          onClick={modalCtx.handleModalClick}
          className="btn btn--show-modal">
          Open your free account today!
        </Button>
      </section>
    </>
  );
};

export default SignUp;
