import React from "react";
import Form from "../sections/form";
import ReactDOM from "react-dom";

const Modal: React.FC<{
  closeModal: (e: any) => void;
}> = (props) => {
  return (
    <div className="modal">
      <button onClick={(e) => props.closeModal(e)} className="btn--close-modal">
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

const Overlay: React.FC<{ closeModal: (e: any) => void }> = (props) => {
  return <div onClick={(e) => props.closeModal(e)} className="overlay"></div>;
};

const SignupModal: React.FC<{
  modalState: boolean;
  closeModalFn: (e: any) => void;
}> = (props) => {
  return (
    <>
      {props.modalState &&
        ReactDOM.createPortal(
          <Modal closeModal={props.closeModalFn} />,
          document.getElementById("overlay") as HTMLElement
        )}
      {props.modalState &&
        ReactDOM.createPortal(
          <Overlay closeModal={props.closeModalFn} />,
          document.getElementById("overlay") as HTMLElement
        )}
    </>
  );
};

export default SignupModal;
