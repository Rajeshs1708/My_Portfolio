import React from 'react'
import "../Styles/Projects.css";
import ProjectList from '../Helpers/ProjectList'
import ProjectItem from '../Components/ProjectItem'

function Projects() {

  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList '>
       {
          ProjectList.map((project,idx)=>{
            return <ProjectItem id={idx} allProjectsData={project}/>
          })
       }
      </div>
    </div>
  )
}

export default Projects
