import React from "react";
import { Button, Img } from "../shared";
import { image } from "../../assets/images";
import { scrollintoView } from "../../utils";

export const HeaderBody = () => {
  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    e.preventDefault();
    scrollintoView("#section--1");
  }

  return (
    <>
      <div className="header__title">
        {/* <!-- <h1 onclick="alert('HTML alert')"> --> */}
        <h1>
          When
          {/* <!-- Green highlight effect --> */}
          <span className="highlight">banking</span>
          meets
          <br />
          <span className="highlight">minimalist</span>
        </h1>
        <h4>A simpler banking experience for a simpler life.</h4>
        <Button onClick={handleClick} className="btn--text btn--scroll-to">
          Learn more &darr;
        </Button>
        <Img
          src={image.hero}
          className="header__img"
          alt="Minimalist bank items"
        />
      </div>
    </>
  );
};
