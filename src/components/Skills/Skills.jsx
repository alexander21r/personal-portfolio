import React from "react";
import "./Skills.css";
import { SiVisualstudiocode } from "react-icons/si";
import {FaGitAlt, FaFigma, FaCss3Alt, FaHtml5, FaBootstrap, FaSass, FaReact} from "react-icons/fa"
import {SiJavascript} from "react-icons/si"

function Service() {
  return (
    <div className="service component__space" id="skills">
      <div className="heading">
        <h1 className="heading">My Skills</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__2">
            <div className="service__box">
              <div className="icon"></div>
              <div className="service__meta">
                <h1 className="service__text1">Frameworks/Libarys </h1>
                <p className="p service__text2  p__color">
                  React <FaReact className="icons react"/>
                  <br />
                  Sass <FaSass className="icons"/>
                  Boostrap <FaBootstrap className="icons"/>
                </p>
              </div>
            </div>
          </div>

          <div className="col__2">
            <div className="service__box">
              <div className="icon"></div>
              <div className="service__meta">
                <h1 className="service__text1">Languages </h1>
                <p className="p service__text2 p__color">
                  HTML <FaHtml5 className="icons lang"/>
                  <br />
                  CSS <FaCss3Alt className="icons lang"/>
                  <br />
                  Javascript <SiJavascript className="icons"/>
                </p>
              </div>
            </div>
          </div>

          <div className="col__2">
            <div className="service__box ">
              <div className="icon"></div>
              <div className="service__meta">
                <h1 className="service__text1"> Design/Tools</h1>
                <p className="p service__text2 p__color">
                  Figma <FaFigma className="icons"/>
                  Git <FaGitAlt className="icons"/>
                  Vs Code <SiVisualstudiocode className="icons"/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
