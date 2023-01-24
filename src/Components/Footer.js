import React from 'react'
import {
  Instagram,
  LinkedIn,
  Facebook,
  Google,
  GitHub
} from '@mui/icons-material'
import '../Styles/Footer.css'

function Footer () {
  return (
    <>
      <footer className='text-center' style={{ backgroundolor: '#f1f1f1' }}>
        <div className='container pt-4'>
          <section className='mb-4'>
            <a
              className='facebook btn btn-link btn-floating btn-lg text-white m-1'
              href='#!'
              role='button'
            >
              <Facebook />
            </a>

            <a
              className='btn btn-link btn-floating btn-lg text-white m-1'
              href='https://mail.google.com/mail/u/0/h/.'
              role='button'
              target='_blank'
              rel='noreferrer'
            >
              <Google />
            </a>

            <a
              className='btn btn-link btn-floating btn-lg text-white m-1'
              href='#!'
              role='button'
            >
              <Instagram />
            </a>

            <a
              className='btn btn-link btn-floating btn-lg text-white m-1'
              href='#!'
              role='button'
            >
              <LinkedIn />
            </a>

            <a
            style={{textColor:"black"}}
              className='btn btn-link btn-floating btn-lg text-white m-1'
              href='#!'
              role='button'
            >
              <GitHub />
            </a>
          </section>
        </div>

        <div
          className='text-center p-3'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',color:"white" }}
        >
          © 2023 Copyright
        </div>
      </footer>
    </>
  )
}

export default Footer
