import { GitHub } from "@mui/icons-material";
import React from "react";
import { useParams } from "react-router-dom";
import ProjectList from "../Helpers/ProjectList";
import netlify from "../Assets/netlify.jpg";
import "../Styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="container-fluid project">
      <h1>{project.name}</h1>
      <img className="img-fluid" src={project.image} alt={project.alt} />
      <div className="row skillsDescription">
        <p>
          <b>Skills : </b>
          {project.skills}
        </p>
        <div>
          <p>
            <b>Description : </b> {project.description}
          </p>
        </div>
      </div>
      <div className="projectLinks">
        <div className="frontEndGitHubLink">
          <a
            className="pb-2"
            href={project.gitLink1}
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <span>FrontEnd</span>
        </div>
        {project.category !== "Javascript" && (
          <div className="backEndGitHubLink">
            <a
              className="pb-2"
              href={project.gitLink2}
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
            <span>BackEnd</span>
          </div>
        )}

        <div className="netlifyLink">
          <a
            className="pb-2"
            href={project.netlifyLink}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={netlify}
              style={{ width: "30px", margin: "4px" }}
              alt="Netlify"
            />
          </a>
          <span>Netlify</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
