import React from 'react'
import '../Styles/Home.css'
import LinkIcon from '@mui/icons-material/Link'

function Home () {
  return (
    <div className='container-fluid'>
      <div className='about row'>
        <div className='aboutLeft col-md-5'>
          <img className='img-fluid' src='/Images/Rajesh.jpg' alt='Rajesh' />
        </div>
        <div className='aboutRight col-md-7'>
          <h2>Hi, My Name is Rajesh</h2>
          <div className='prompt'>
            <p>
              A Full Stack Web Developer with a passion for learning and
              creating.
            </p>
            <div className='svgIcon'>
              <a
                rel='noreferrer'
                href='https://docs.google.com/document/d/1mB8SQKGtlbAtGp5zwvsDka7Di88PWqBDgLbuMXvzqew/edit'
                className='resume text-center'
                target='_blank'
              >
                <img
                  alt=''
                  src='/Images/resume.jpg'
                  style={{ width: '50px', borderRadius: '50%' }}
                  title='Resume'

                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
