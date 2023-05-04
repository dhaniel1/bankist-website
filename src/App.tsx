import React, { useContext, useEffect, useRef } from "react";
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
import { modalContext } from "./store";

function App() {
  const modalCtx = useContext(modalContext);
  const ctx = useContext(context);

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    ctx.fnSetHeaderRef(headerRef);
  });

  return (
    <>
      <header ref={headerRef} id="header" className="header">
        <Nav />
        <HeaderBody />
      </header>
      <Features />
      <Operations />
      <Testimonials />
      <SignUp />
      <Footer />
      {modalCtx.openModal && <SignupModal />}
      {/* There should be a signup Modal */}
    </>
  );
}

export default App;
