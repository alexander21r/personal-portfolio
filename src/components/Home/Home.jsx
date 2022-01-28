import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialIcons from "./SocialIcons";

function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  const [show, setShow] = useState(false);

  return (
    <div className="home" id="home">
      <div className="home__bg">
        <div className="header">
          <div className="navigation">
            <ul className="navbar">
              <a href="#home">
                <li className="nav__items">Home</li>
              </a>
              <a href="#about">
                <li className="nav__items">About</li>
              </a>
              <a href="#skills">
                <li className="nav__items">Skills</li>
              </a>
              <a href="#projects">
                <li className="nav__items">Projects</li>
              </a>
              <a href="#contact">
                <li className="nav__items">Contact</li>
              </a>
              <div className="social__icons">
                <SocialIcons />
              </div>
            </ul>
          </div>

          <div className="toggle__menu">
            <div className="social__icons social__icons__mini__nav">
              <SocialIcons />
            </div>
            <div className="hamIcon" onClick={() => setShow(!show)}>
              <Hamburger color="white" />
            </div>
          </div>

          {show ? (
            <div>
              <ul
                className="sidebar"
                data-aos="fade-left"
                data-aos-duration="500">
                <li className="sideNavbar">
                  <a href="#home">Home</a>
                </li>
                <li className="sideNavbar ">
                  <a href="#about">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#skills">Skills</a>
                </li>
                <li className="sideNavbar">
                  <a href="#projects">Projects</a>
                </li>
                <li className="sideNavbar">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text">Welcome to my world</h1>
              <h2 className="home__text">Hi I'm Alexander Rasoli</h2>
              <h3 className="home__text ">
                <Typewriter
                  words={["<Frontend Developer />", "<Web Developer />"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h3>
              <h4 className="home__text ">Based in Sweden</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
