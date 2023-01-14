import { GitHub } from '@mui/icons-material';
import React from 'react'
import {useParams} from 'react-router-dom';
import ProjectList from '../Helpers/ProjectList';
import netlify from '../Assets/netlify.jpg'
import '../Styles/ProjectDisplay.css'

function ProjectDisplay() {

    const {id}=useParams();
    const project = ProjectList[id]
  return (

    <div className='project'>
     <h1>{project.name}</h1>
     <img className='img-fluid' src={project.image} alt={project.alt}/>
    <p><b>Skills : </b>{project.skills}</p>
    <div className='projectLinks'>
    <a href={project.gitLink1} target='_blank' rel="noreferrer"><GitHub /></a>
    <a href={project.gitLink2} target='_blank' rel="noreferrer"><GitHub /></a>
     <a href={project.netlifyLink} target='_blank' rel="noreferrer"><img src={netlify} style={{width:"2.5rem"}} alt="Netlify" /></a>
     </div>
    </div>
  )
}

export default ProjectDisplay
