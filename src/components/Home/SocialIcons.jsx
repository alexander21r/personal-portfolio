import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <>
      <a href="https://github.com/alexander21r" target="_blank">
        <li className="nav__items__social">
          <FaGithub className="social" />
        </li>
      </a>
      <a
        href="https://www.linkedin.com/in/alexander-rasoli-157888218/"
        target="_blank">
        <li className="nav__items__social">
          <FaLinkedin className="social" />
        </li>
      </a>
      <a href="https://www.instagram.com/alexandeer.r/" target="_blank">
        <li className="nav__items__social">
          <FaInstagram className="social" />
        </li>
      </a>
    </>
  );
};

export default SocialIcons;
