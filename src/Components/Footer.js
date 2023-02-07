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
          <img alt='' src='/Images/github.png' style={{width:"30px",borderRadius:"50%"}} />
          </a>
          <a
            className='btn btn-link btn-floating btn-lg text-white m-1'
            href='https://www.guvi.com/rajeshs109767'
            role='button'
            title='Guvi '
            target='_blank'
            rel='noreferrer'
          >
            <img alt='' src='/Images/guvi.png' style={{width:"30px",borderRadius:"50%"}} />
          </a>

          <a
            className='btn btn-link btn-floating btn-lg text-white m-1'
            href='https://docs.google.com/document/d/1mB8SQKGtlbAtGp5zwvsDka7Di88PWqBDgLbuMXvzqew/edit'
            target='_blank'
            title='Resume'
            rel='noreferrer'
            role='button'
          >
            <img alt='' src='/Images/resume.jpg' style={{width:"30px",borderRadius:"50%"}} />
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
