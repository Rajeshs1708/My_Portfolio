import React from 'react'
import '../Styles/Footer.css'

function Footer () {
  return (
    <footer
      className='text-center'
    >
      <div className='pt-4'>
        <section className='mb-3'>
          <a
            className='btn btn-link btn-floating btn-lg text-white m-1'
            href='https://github.com/Rajeshs1708'
            target='_blank'
            title='GitHub'
            rel='noreferrer'
            role='button'
          >
          <img alt='github' src='/Images/github.png' />
          </a>
          <a
            className='btn btn-link btn-floating btn-lg text-white m-1'
            href='https://www.linkedin.com/in/rajesh-s-42085124a'
            role='button'
            title='linkedin'
            target='_blank'
            rel='noreferrer'
          >
            <img alt='linkedin' src='/Images/linkedin.png' />
          </a>
          <a
            className='btn btn-link btn-floating btn-lg text-white m-1'
            href='https://drive.google.com/file/d/18re0op-8pOO3sl_IEbcPCWJpw0lr0U0X/view?usp=sharing'
            target='_blank'
            title='Resume'
            rel='noreferrer'
            role='button'
          >
            <img alt='resume' src='/Images/resume.jpg' />
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
