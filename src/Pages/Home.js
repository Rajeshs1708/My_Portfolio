import React from 'react'
import '../Styles/Home.css'

function Home () {
  return (
    <>
      <div className='container-fluid'>
        <div className='about row pt-4'>
          <div className='aboutLeft col-md-5'>
            <img
              className='img-fluid mx-auto d-block'
              src='/Images/Rajesh.jpg'
              alt='Rajesh'
            />
          </div>
          <div className='shadow text-wrap aboutRight col-md-7 p-3'>
            <h2>Hi,I'm Rajesh</h2>
            <h3 data-text='Full_Stack_Developer...'>Full_Stack_Developer...</h3>
            <div className='prompt'>
              <p>
                I have completed my MERN stack development course and having
                hands-on experience in web application from creating full stack
                projects and attend hackathons currently. I looking for a job
                from which i get trained technologies like React Js, Node Js,
                MongoDB.
              </p>
              <div className='svgIcon' style={{ width: '50px' }}>
                <a
                  rel='noreferrer'
                  href='https://drive.google.com/file/d/1yA4aHo80fX5pTPhX0FGXpM_73CF5XeN5/view?usp=share_link'
                  className='resume'
                  target='_blank'
                >
                  <img
                    alt='Resume'
                    src='/Images/resume.jpg'
                    style={{
                      width: '50px',
                      borderRadius: '50%'
                    }}
                    title='Resume'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
