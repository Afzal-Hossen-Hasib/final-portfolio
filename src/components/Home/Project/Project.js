import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useProject from "../../../hooks/useProject";
import "./Project.css";

const Project = () => {
  const [projects, setProjects] = useProject();
  const project = projects.slice(0, 4);

  const navigate = useNavigate();
        const handleDetail = id => {
            navigate (`/detailProject/${id}`)
        }

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
            const { name, img, detail, tech, live, client, server, id } = newP;
            return (
              <div className="box btn_shadow">
                <div className="img">
                  <img src={img} alt="" />
                </div>

                <div className="category d_flex">
                  <span>{name}</span>
                </div> <br />

                

                <button onClick={()=> handleDetail(id)} className="btn btn-sm home-btn">See Details</button>
              </div>
            );
          })}
        </div>

        
      </section>
      <Link className="see-btn mt-10" to="/project">
          See More Projects..
        </Link>
    </div>
  );
};

export default Project;
