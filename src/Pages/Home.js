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
          <h2>Hi, I'm Rajesh</h2>
          <h3>Full Stack-Developer</h3>
          <div className='prompt'>
            <p>
             I have completed my MERN stack development course and having hands-on experience in web application from creating full stack projects and attend hackathans Currently. I looking for a job from which i get trained technologies like React Js, Node Js MongoDB.
            </p>
            <div className='svgIcon'>
              <a
                rel='noreferrer'
                href='https://drive.google.com/file/d/1hguAJ8tZ8HmybNXGGCcL9zoqr4Lb3NOs/view?usp=sharing'
                className='resume'
                target='_blank'
              >
                <img
                  alt='Resume'
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
