import React from 'react'
import '../Styles/Footer.css'

function Footer () {
  return (
    <footer className='text-center'>
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
            href='https://www.linkedin.com/in/rajesh-s-bb448a147/'
            role='button'
            title='linkedin'
            target='_blank'
            rel='noreferrer'
          >
            <img alt='linkedin' src='/Images/linkedin.png' />
          </a>
          <a
            className='btn btn-link btn-floating btn-lg text-white m-1'
            href='https://drive.google.com/file/d/1yA4aHo80fX5pTPhX0FGXpM_73CF5XeN5/view?usp=share_link'
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
