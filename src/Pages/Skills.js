import React from 'react'
import '../Styles/Skills.css'

function Skills() {
  return (
    <div className='skills container'>
    <div className='text-center'>
      <h1 className='skillHeading display-3'>Skills</h1>
    </div>

    <div className='skillList row'>
      <div className='frontEnd col-md-4'>
        <div className='pb-3'>
          <h2>Front End</h2>
        </div>
        <div className='frontEndBox'>
          <div>
            <img alt='' src='/Images/react.png' />
          </div>
          <div>
            <h5>React</h5>
          </div>
          <div>
            <progress max='100' value='80'></progress>
          </div>
        </div>

        <div className='frontEndBox'>
          <div>
            <img alt='' src='/Images/bootstrap.png' />
          </div>
          <div>
            <h5>Bootstrap</h5>
          </div>
          <div>
            <progress max='100' value='80'></progress>
          </div>
        </div>

        <div className='frontEndBox'>
          <div>
            <img alt='' src='/Images/html5.png' />
          </div>
          <div>
            <h5>HTML 5</h5>
          </div>
          <div>
            <progress max='100' value='80'></progress>
          </div>
        </div>

        <div className='frontEndBox'>
          <div>
            <img alt='' src='/Images/css3.png' />
          </div>
          <div>
            <h5>CSS 3</h5>
          </div>
          <div>
            <progress max='100' value='80'></progress>
          </div>
        </div>
      </div>

      <div className='backEnd col-md-4'>
        <div className='pb-3'>
          <h2>Back End</h2>
        </div>
        <div className='backEndBox'>
          <div>
            <img alt='' src='/Images/node js.png' />
          </div>
          <div>
            <h5>Node JS</h5>
          </div>
          <div>
            <progress max='100' value='70'>
              80%
            </progress>
          </div>
        </div>

        <div className='backEndBox'>
          <div>
            <img alt='' src='/Images/express.png' />
          </div>
          <div>
            <h5>Express JS</h5>
          </div>
          <div>
            <progress max='100' value='65'></progress>
          </div>
        </div>

        <div className='backEndBox'>
          <div>
            <img alt='' src='/Images/mongoDB.png' />
          </div>
          <div>
            <h5>MongoDB</h5>
          </div>
          <div>
            <progress max='100' value='60'></progress>
          </div>
        </div>

        <div className='backEndBox'>
          <div>
            <img alt='' src='/Images/mysql.png' />
          </div>
          <div>
            <h5>My SQL</h5>
          </div>
          <div>
            <progress max='100' value='60'></progress>
          </div>
        </div>
      </div>

      <div className='languages col-md-4'>
        <div className='pb-3'>
          <h2>Languages</h2>
        </div>
        <div className='languagesBox'>
          <div>
            <img alt='' src='/Images/js.png' />
          </div>
          <div>
            <h5>Javascript</h5>
          </div>
          <div>
            <progress max='100' value='70'></progress>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Skills
