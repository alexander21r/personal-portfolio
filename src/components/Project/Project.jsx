import React from "react";
import "./Project.css";
import { data } from "./Projectss";

function Project() {
  return (
    <div className="project component__space" id="projects">
      <div className="heading">
        <h1 className="heading">My Projects</h1>
        <p className="heading p__color">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta ab
          asaas sasa
        </p>
        <p className="heading p__color">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          ad.
        </p>
      </div>
      <div className="container">
        <div className="row">
          {data.map((data, key) => {
            const { title, img } = data;
            return (
              <div className="col__2" key={key}>
                <div className="project__box ">
                  <div>
                    <div>
                      <img src={img} alt="project1" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                  <div className="project__meta ">
                    <h5 className="project__text">{title}</h5>
                    <div className="project__btns">
                      <a href="Details" className="project__btn">
                        Source code
                      </a>
                      <a href="Details" className="project__btn">
                        View project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="view__more__btn ">
          <button className="view__more btn purpleBtnHover">View more</button>
        </div>
      </div>
    </div>
  );
}

export default Project;
