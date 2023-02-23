import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import HomeIcon from '@mui/icons-material/Home'
import EmailIcon from '@mui/icons-material/Email'

function Contact () {
  return (
    <section className='m-4' style={{color:"#3e497a"}}>
      <h2 className='h1-responsive font-weight-bold text-center my-4'>
        Contact us
      </h2>
      <p className='text-center w-responsive mx-auto mb-5'>
        Do you have any questions? Please do not hesitate to contact us
        directly.
      </p>
      <div className='row justify-content-end ps-2 pe-2'>
        {/* Input part */}
        <div className='col-md-4 mb-md-0 mb-5 pe-4'>
          <form id='contact-form' name='contact-form' action='' method='POST'>
            <div className='row mb-2'>
              <div className='col-md-12'>
                <div className='md-form mb-0'>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='form-control'
                    placeholder='Name'
                  />
                </div>
              </div>
            </div>

            <div className='row mb-2'>
              <div className='col-md-12'>
                <div className='md-form mb-0'>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    className='form-control'
                    placeholder='Email'
                  />
                </div>
              </div>
            </div>

            <div className='row mb-2'>
              <div className='col-md-12'>
                <div className='md-form mb-0'>
                  <input
                    type='number'
                    id='number'
                    name='number'
                    className='form-control'
                    placeholder='Phone Number'
                  />
                </div>
              </div>
            </div>

            <div className='row mb-2'>
              <div className='col-md-12'>
                <div className='md-form'>
                  <textarea
                    type='text'
                    id='message'
                    name='message'
                    rows='2'
                    className='form-control md-textarea'
                    placeholder='Your message'
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='row mb-2'>
              <input type='submit' className='btn btn-primary large' />
            </div>
          </form>
        </div>

        {/* Address part */}
        <div className='col-md-6 ps-5'>
          <div className='mb-5'>
            <p>
              <span style={{ paddingRight: '20px' }}>
                <HomeIcon />
              </span>
              No.10, Bharathidasan street,TMP Nagar,Padi-Chennai-600050.
            </p>
          </div>
          <div className='mb-5'>
            <p>
              <span style={{ paddingRight: '20px' }}>
                <LocalPhoneIcon />
              </span>
              +91- 8637656612
            </p>
          </div>
          <div className='mb-5'>
            <p>
              <span style={{ paddingRight: '20px' }}>
                <EmailIcon />
              </span>
              rajeshs1097@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
