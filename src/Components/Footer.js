import React from 'react'
import '../Styles/Footer.css'

function Footer () {
  return (
    <footer
      className='text-center'
      style={{ backgroundolor: '#f1f1f1' }}
    >
      <div className='pt-4'>
        <section className='mb-3'>
          <a
            style={{ textColor: 'black' }}
            className='btn btn-link btn-floating btn-lg text-white m-1'
            href='https://github.com/Rajeshs1708'
            target='_blank'
            title='GitHub'
            rel='noreferrer'
            role='button'
          >
          <img alt='github' src='/Images/github.png' style={{width:"30px",borderRadius:"50%"}} />
          </a>
          <a
            className='btn btn-link btn-floating btn-lg text-white m-1'
            href='https://www.linkedin.com/in/rajesh-s-42085124a'
            role='button'
            title='linkedin'
            target='_blank'
            rel='noreferrer'
          >
            <img alt='linkedin' src='/Images/linkedin.png' style={{width:"30px",borderRadius:"50%"}} />
          </a>
          <a
            className='btn btn-link btn-floating btn-lg text-white m-1'
            href='https://drive.google.com/file/d/18K5LfP_vP-XTpmXSrfke3yevwXU3G8fg/view?usp=sharing'
            target='_blank'
            title='Resume'
            rel='noreferrer'
            role='button'
          >
            <img alt='resume' src='/Images/resume.jpg' style={{width:"30px",borderRadius:"50%"}} />
          </a>
        </section>
      </div>

      <div
        className='text-center p-3'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'white' }}
      >
        © 2023 Copyright
      </div>
    </footer>
  )
}

export default Footer
