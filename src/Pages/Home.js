import React from 'react'
import '../Styles/Home.css'
import DownloadIcon from '@mui/icons-material/Download';

function Home() {
  return (
    <div className='home'>

      <div className='about'>
        <h2>Hi, My Name is  Rajesh</h2>
        <div className='prompt'>
          <p>A Full Stack Web Developer with a passion for learning and creating.</p>
          <div className='svgIcon'>
          <a href="/Resume/updatedResume.pdf" download="resume" className="resume btn btn-primary text-center">Download CV  <DownloadIcon /></a>
          </div>
        </div>
      </div>

      <div className='skills text-center'>
        <h1>Skills</h1>
        <ol className='list'>

          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, NPM, BootStrap, Material UI, Yarn, StyledComponents</span>
          </li>

          <li className='item'>
            <h2>Back-End</h2>
            <span>Node JS, Express JS, MySQL, MongoDB, AWS</span>
          </li>

          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>


        </ol>
      </div>

    </div>
  )
}

export default Home
