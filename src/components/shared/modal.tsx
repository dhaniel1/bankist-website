import React, { useContext } from "react";
import Form from "../sections/form";
import ReactDOM from "react-dom";
import { modalContext } from "../../store";

const Modal: React.FC = () => {
  const modalCtx = useContext(modalContext);

  return (
    <div className="modal">
      <button
        onClick={(e) => modalCtx.closeModalFn(e)}
        className="btn--close-modal">
        &times;
      </button>
      <h2 className="modal__header">
        Open your bank account <br />
        in just <span className="highlight">5 minutes</span>
      </h2>
      <Form />
    </div>
  );
};

const Overlay: React.FC = () => {
  const modalCtx = useContext(modalContext);
  return (
    <div onClick={(e) => modalCtx.closeModalFn(e)} className="overlay"></div>
  );
};

const SignupModal: React.FC = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal />,
        document.getElementById("overlay") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById("overlay") as HTMLElement
      )}
    </>
  );
};

export default SignupModal;
