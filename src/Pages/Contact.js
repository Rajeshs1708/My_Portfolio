import React from 'react';
import '../Styles/Contact.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
    return (


        <section className="m-4">


            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly.</p>

            <div className="row ps-2 pe-2">


                <div className="col-md-7 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">


                        <div className="row pb-4">


                            <div className="col-md-6 pb-2">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="name" className="form-control" placeholder='Your name' />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="email" className="form-control" placeholder='Your email' />
                                </div>
                            </div>

                        </div>

                        <div className="row pb-4">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input type="text" id="subject" name="subject" className="form-control" placeholder='Subject' />
                                    {/* <label for="subject" className="">Subject</label> */}
                                </div>
                            </div>
                        </div>

                        <div className="row pb-4">
                            <div className="col-md-12">
                                <div className="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" placeholder='Your message'></textarea>
                                </div>
                            </div>
                        </div>


                    </form>

                    <div className=" row" >
                        <div className="col-md-12  text-center">
                            <a className="btn btn-primary" href='#herf' style={{width:"350px"}}>Send</a>
                        </div>
                    </div>
                </div>



                <div className="col-md-5 ps-4">
                    <ul className="list-unstyled mb-0">
                        <li>
                            <p><HomeIcon/> No.10, Bharathidasan street,TMP Nagar,</p>
                            <p className='ps-4'>Padi-Chennai-600050.</p>
                        </li>

                        <li>
                            <p><LocalPhoneIcon/> +91- 8637656612</p>
                        </li>

                        <li>
                            <p><EmailIcon /> rajeshsitdeveloper@gmail.com</p>
                        </li>
                    </ul>
                </div>


            </div>

        </section>



    )
}

export default Contact
