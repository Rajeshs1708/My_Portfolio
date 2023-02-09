import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import HomeIcon from '@mui/icons-material/Home'
import EmailIcon from '@mui/icons-material/Email'

function Contact () {
  return (
    <section className='m-4'>
      <h2 className='h1-responsive font-weight-bold text-center my-4'>
        Contact us
      </h2>
      <p className='text-center w-responsive mx-auto mb-5'>
        Do you have any questions? Please do not hesitate to contact us
        directly.
      </p>
      <div className='row ps-2 pe-2'>
        {/* Input part */}
        <div className='col-md-5 mb-md-0 mb-5 pe-4'>
          <form
            id='contact-form'
            name='contact-form'
            action='mail.php'
            method='POST'
          >
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
        <div className='col-md-7 ps-5'>
          <div className='row mb-3'>
            <div className='col-sm-1 mb-2'>
              <HomeIcon />
            </div>
            <div className='col-sm-7 lead'>
              No.10, Bharathidasan street,TMP Nagar,Padi-Chennai-600050.
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-sm-1 mb-2'>
              <LocalPhoneIcon />
            </div>
            <div className='col-sm-7 lead'>+91- 8637656612</div>
          </div>
          <div className='row'>
            <div className='col-sm-1 mb-2'>
              <EmailIcon />
            </div>
            <div className='col-sm-7 lead'>rajeshs1097@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
