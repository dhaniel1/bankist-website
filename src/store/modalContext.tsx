import React, { createContext, useState } from "react";

export const modalContext = createContext<modalContextObj>({
  openModal: false,
  handleModalClick: () => {},
  closeModalFn: (e: CLoseModalFnType) => {},
});

const ModalContextProvider = (props: any) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  function handleModalClick() {
    setOpenModal(!openModal);
  }

  function closeModalFn(e: CLoseModalFnType) {
    setOpenModal((prevState) => !prevState);
  }

  return (
    <modalContext.Provider
      value={{ handleModalClick, closeModalFn, openModal }}>
      {props.children}
    </modalContext.Provider>
  );
};

export default ModalContextProvider;
