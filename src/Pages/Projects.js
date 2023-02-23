import React from 'react'
import '../Styles/Projects.css'
import ProjectList from '../Helpers/ProjectList'
import ProjectItem from '../Components/ProjectItem'

function Projects () {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='credentials'>
          <p><b>Admin Email :</b> rajesh@gmail.com  || <span><b>Password :</b> rajesh123</span></p><br />
          <p><b>User Email :</b> mani@gmail.com  || <span><b>Password :</b> mani123</span></p>   
      </div>
      <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} allProjectsData={project} />
        })}
      </div>
    </div>
  )
}

export default Projects
