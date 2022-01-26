import React, { useEffect } from "react";
import "./About.css";
import placeHolder from "../img/placeholder.jpg"
import {FaChevronUp} from "react-icons/fa"

function About() {
  window.addEventListener("scroll", () => {
    const toTop = document.querySelector(".bottom__to__top");
    toTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="about">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={placeHolder} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hello! My name is Alexander Rasoli and I enjoy creating things
                that live on the internet. My interest in web development
                started back in 2019 when I decided to try editing custom Tumblr
                themes — turns out hacking together a custom reblog button
                taught me a lot about HTML & CSS!
              </p>
              <p className="about__text p__color">
                I am an allround web developer. I am a junior programmer with
                good knowledge of front-end techniques. I love structure and
                order and I also stand for quality. I love spending time on
                fixing little details and optimizing web apps. Also I like
                working in a team, you'll learn faster and much more. As the
                saying goes: 'two heads are better than one'.
              </p>
              <div className="about__button ">
                <a href="#contact">
                  <button className="about btn purpleBtnHover">
                    Contact me
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top purpleBtnHover">
          <FaChevronUp />
        </a>
      </div>
    </div>
  );
}

export default About;
