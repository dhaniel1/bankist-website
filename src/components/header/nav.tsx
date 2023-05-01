import React, { useContext, useEffect, useRef, useState } from "react";

import { Button, Img, ListItem } from "../shared";
import { image } from "../../assets/images";
import { context } from "../../store/context";

export const Nav: React.FC<{ handleClick: () => void }> = (props) => {
  const [style, setStyle] = useState("nav");
  const ctx = useContext(context);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setStyle(ctx.contextStyle);
    ctx.fnSetNavRef(navRef);
  }, [ctx, style]);

  return (
    <nav ref={navRef} className={style}>
      <Img
        src={image.logo}
        alt="Bankist logo"
        className="nav__logo"
        id="logo"
        data-version-number="3.0"
      />

      <ul className="nav__links">
        <ListItem
          liClassName="nav__item"
          aClassName="nav__link"
          href="#section--1">
          {/*  this should be a path gotten from the routes path object to the desired link */}
          Features
        </ListItem>
        <ListItem
          liClassName="nav__item"
          aClassName="nav__link"
          href="#section--2">
          {/*  this should be a path gotten from the routes path object to the desired link */}
          Operations
        </ListItem>
        <ListItem
          liClassName="nav__item"
          aClassName="nav__link"
          href="#section--3">
          {/*  this should be a path gotten from the routes path object to the desired link */}
          Testimonials
        </ListItem>
        <Button
          className="btn btn--show-modal nav__link--btn"
          onClick={props.handleClick}>
          Open account
        </Button>
      </ul>
    </nav>
  );
};
