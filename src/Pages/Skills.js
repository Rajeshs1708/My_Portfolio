import React from 'react'
import '../Styles/Skills.css'

function Skills () {
  return (
    <div className='skills container-fluid'>
      <div className='text-center'>
        <h1 className='skillHeading h1'>Skills</h1>
      </div>

      <div className='skillList row'>
        <div className='frontEnd g-2 col-md-4'>
          <div className='pb-3'>
            <h2>Front End</h2>
          </div>
          <div className='frontEndBox'>
            <div>
              <img alt='React' src='/Images/react.png' />
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
              <img alt='Bootstrap' src='/Images/bootstrap.png' />
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
              <img alt='HTML5' src='/Images/html5.png' />
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
              <img alt='CSS3' src='/Images/css3.png' />
            </div>
            <div>
              <h5>CSS 3</h5>
            </div>
            <div>
              <progress max='100' value='80'></progress>
            </div>
          </div>
        </div>

        <div className='backEnd g-2 col-md-4'>
          <div className='pb-3'>
            <h2>Back End</h2>
          </div>
          <div className='backEndBox'>
            <div>
              <img alt='Node JS' src='/Images/node js.png' />
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
              <img alt='Express JS' src='/Images/express.png' />
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
              <img alt='MongoDB' src='/Images/mongoDB.png' />
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
              <img alt='My SQL' src='/Images/mysql.png' />
            </div>
            <div>
              <h5>My SQL</h5>
            </div>
            <div>
              <progress max='100' value='60'></progress>
            </div>
          </div>
        </div>

        <div className='languages g-2 col-md-4'>
          <div className='pb-3'>
            <h2>Languages</h2>
          </div>
          <div className='languagesBox'>
            <div>
              <img alt='Javascript' src='/Images/js.png' />
            </div>
            <div>
              <h5>Javascript</h5>
            </div>
            <div>
              <progress max='100' value='70'></progress>
            </div>
          </div>

          <div className='languagesBox'>
            <div>
              <img alt='Javascript' src='/Images/postman.png' />
            </div>
            <div>
              <h5>Postman</h5>
            </div>
            <div>
              <progress max='100' value='80'></progress>
            </div>
          </div>

          <div className='languagesBox'>
            <div>
              <img alt='Javascript' src='/Images/aws.png' />
            </div>
            <div>
              <h5>AWS</h5>
            </div>
            <div>
              <progress max='100' value='60'></progress>
            </div>
          </div>

          <div className='languagesBox'>
            <div>
              <img alt='Javascript' src='/Images/render.png' />
            </div>
            <div>
              <h5>Render</h5>
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
