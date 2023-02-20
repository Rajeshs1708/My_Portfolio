import React from 'react'
import '../Styles/Home.css'

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
                href='https://drive.google.com/file/d/18K5LfP_vP-XTpmXSrfke3yevwXU3G8fg/view?usp=sharing'
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
