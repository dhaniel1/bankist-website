import React, { useContext, useEffect, useRef, useState } from "react";
import { HeaderBody, Nav } from "./components/header";
import {
  Features,
  Operations,
  SignUp,
  Testimonials,
} from "./components/sections";
import { Footer } from "./components/footer";
import SignupModal from "./components/shared/modal";
import { context } from "./store/context";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  function handleModalClick() {
    setOpenModal(!openModal);
  }

  function closeModalFn(e: any) {
    setOpenModal((prevState) => !prevState);
    console.log(e.type);
  }

  const ctx = useContext(context);

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    ctx.fnSetHeaderRef(headerRef);
  });

  return (
    <>
      <header ref={headerRef} id="header" className="header">
        <Nav handleClick={handleModalClick} />
        <HeaderBody />
      </header>
      <Features />
      <Operations />
      <Testimonials />
      <SignUp handleClick={handleModalClick} />
      <Footer />
      {openModal && (
        <SignupModal modalState={openModal} closeModalFn={closeModalFn} />
      )}
      {/* There should be a signup Modal */}
    </>
  );
}

export default App;
