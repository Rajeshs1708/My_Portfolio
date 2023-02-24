import React, { useState } from 'react'
import axios from "axios";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import HomeIcon from '@mui/icons-material/Home'
import EmailIcon from '@mui/icons-material/Email'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact () {
  const [clientDetails, setClientDetails] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    message: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    const newClient = { ...clientDetails }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/create-client`,
        newClient
      )
      if (response) {
        const notify = () => toast.success(`Request sent successfully`, { theme: 'colored'});
        notify()
        setClientDetails({
          name: '',
          email: '',
          mobileNumber: '',
          message: '',
        })
       
      }
    } catch (err) {
      const notify = () => toast.error(`*${err.response.data}*`, { theme: 'colored' });
      notify()
      console.log('Error: ', err)
    }
  }
  const handleForm = value => {
    return setClientDetails(client => {
      return { ...client, ...value }
    })
  }
  return (
    <section className='m-4' style={{ color: '#3e497a' }}>
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
          <form onSubmit={handleSubmit} id='contact-form' name='contact-form'>
            <div className='row mb-2'>
              <div className='col-md-12'>
                <div className='md-form mb-0'>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={clientDetails.name}
                    onChange={e => handleForm({ name: e.target.value })}
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
                    value={clientDetails.email}
                    onChange={e => handleForm({ email: e.target.value })}
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
                    value={clientDetails.mobileNumber}
                    onChange={e => handleForm({ mobileNumber: e.target.value })}
                    className='form-control'
                    placeholder='Mobile Number'
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
                    value={clientDetails.message}
                    onChange={e => handleForm({ message: e.target.value })}
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
            <ToastContainer hideProgressBar={true}/>
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
