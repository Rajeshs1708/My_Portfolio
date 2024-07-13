import React, { useState } from "react";
import "../Styles/Projects.css";
import ProjectList from "../Helpers/ProjectList";
import ProjectItem from "../Components/ProjectItem";

//Get all the category in the projectList
const category = ProjectList.map((item, i) => {
  return item.category;
});
// Make it as new Array
const newItems = ["All", ...new Set([...category])];

function Projects() {
  const [newProjectList, setNewProjectList] = useState(ProjectList);

  const handleClickButton = async(item) => {
   
    if (item === "All") {
      await setNewProjectList(ProjectList);
      return;
    }
    let result = ProjectList.filter((ele, i) => ele.category === item);
    await setNewProjectList(result);
  };

  return (
    <div className="projects">
      <h1 className="h3">My Personal Projects</h1>
      <div className="credentials text-center">
        <p>
          <b>Admin Email :</b> admin@gmail.com ||{" "}
          <span>
            <b>Password :</b> admin123
          </span>
        </p>
        <br />
        <p>
          <b>User Email :</b> user@gmail.com ||{" "}
          <span>
            <b>Password :</b> user123
          </span>
        </p>
      </div>
      <div className="category_buttons">
        {newItems.map((item, index) => {
          return (
            <button
              key={index}
              className="btn"
              onClick={() => handleClickButton(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="projectList">
        {newProjectList.map((project, idx) => {
          return <ProjectItem id={idx} allProjectsData={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
