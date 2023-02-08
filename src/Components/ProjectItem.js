import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectItem (props) {
  const navigate = useNavigate()
  return (
    <>
      <div
        className='card'
        onClick={() => {
          navigate('/projects/' + props.id)
        }}
        style={{ width: '15rem' }}
      >
        <img
          src={props.allProjectsData.image}
          className='card-img-top'
          alt={props.allProjectsData.alt}
        />
        <div className='card-body'>
          <h5 className='card-title'>{props.allProjectsData.name}</h5>
        </div>
      </div>
    </>
  )
}

export default ProjectItem
