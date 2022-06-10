import React from "react";
import { Link } from "react-router-dom";
import useProject from "../../../hooks/useProject";
import "./Project.css";

const Project = () => {
  const [projects, setProjects] = useProject();
  const project = projects.slice(0, 4);

  return (
    <div>
      <section className="project top">
        <div className="container">
          <div className="heading">
            <h4>MY PROJECTS</h4>
          </div>
        </div>

        <div className="content grid">
          {project.map((newP) => {
            const { name, img } = newP;
            return (
              <div className="box btn_shadow">
                <div className="img">
                  <img src={img} alt="" />
                </div>

                <div className="category d_flex">
                  <span>{name}</span>
                </div>
                <button className="home-btn">See Details</button>
              </div>
            );
          })}
        </div>

        
      </section>
      <Link className="see-btn mt-10" to="/project">
          See More..
        </Link>
    </div>
  );
};

export default Project;
