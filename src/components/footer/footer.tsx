import React from "react";
import { Img, ListItem } from "../shared";
// import { Link } from "react-router-dom";
import { image } from "../../assets/images";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <ul className="footer__nav">
          <ListItem
            aClassName="footer__link"
            href="#"
            liClassName="footer__item">
            About
          </ListItem>
          <ListItem
            aClassName="footer__link"
            href="#"
            liClassName="footer__item">
            Pricing
          </ListItem>
          <ListItem
            aClassName="footer__link"
            href="#"
            liClassName="footer__item">
            Terms of use
          </ListItem>
          <ListItem
            aClassName="footer__link"
            href="#"
            liClassName="footer__item">
            Privacy Policies
          </ListItem>
          <ListItem
            aClassName="footer__link"
            href="#"
            liClassName="footer__item">
            Careers
          </ListItem>
          <ListItem
            aClassName="footer__link"
            href="#"
            liClassName="footer__item">
            Blog
          </ListItem>
          <ListItem
            aClassName="footer__link"
            href="#"
            liClassName="footer__item">
            Contact Us
          </ListItem>
        </ul>
        <Img src={image.icon} alt="Logo" className="footer__logo" />
        <p className="footer__copyright">
          {/*  &copy; Copyright by 
           <Link
            className="footer__link twitter-link"
            target="_blank"
            to="https://twitter.com/jonasschmedtman">
            @dhani__el
          </Link> */}
          Many thanks to those who motivated this project. Special thanks to
          io.bami & Man.TunE'
        </p>
      </footer>
    </>
  );
};

export default Footer;
