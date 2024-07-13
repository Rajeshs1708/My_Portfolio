import React, { useState } from "react";
import axios from "axios";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [clientDetails, setClientDetails] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newClient = { ...clientDetails };
    console.log(newClient);
    try {
      const response = await axios.post(
        `http://localhost:8080/api/create-client`,
        newClient
      );
      console.log(response.data);
      if (response) {
        const notify = () =>
          toast.success(`Request sent successfully`, { theme: "colored" });
        notify();
        setClientDetails({
          name: "",
          email: "",
          mobileNumber: "",
          message: "",
        });
      }
    } catch (err) {
      const notify = () =>
        toast.error(`${err.message}`, { theme: "colored" });
      notify();
      console.log("Error: ", err);
    }
  };
  const handleForm = (value) => {
    return setClientDetails((client) => {
      return { ...client, ...value };
    });
  };
  return (
    <section className="p-3" style={{ color: "#3e497a",height:"auto",padding:"0rem 0rem 5rem 0rem" }}>
      <h2
        className="h3 text-center"
        style={{
          fontFamily: `Cambria, Cochin, Georgia, Times, Times New Roman, serif`,
          padding: "1.5rem",
        }}
      >
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto mb-3">
        Do you have any questions? Please do not hesitate to contact us
        directly.
      </p>
      <div className="row justify-content-around">
        {/* Input part */}
        <div className="col-md-5 p-4">
          <form
            onSubmit={handleSubmit}
            id="contact-form"
            name="contact-form"
            autoComplete="off"
          >
            <div className="row mb-2">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    style={{ borderRadius: "5px" }}
                    type="text"
                    id="name"
                    name="name"
                    value={clientDetails.name}
                    onChange={(e) => handleForm({ name: e.target.value })}
                    className="form-control p-3"
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    style={{ borderRadius: "5px" }}
                    type="text"
                    id="email"
                    name="email"
                    value={clientDetails.email}
                    onChange={(e) => handleForm({ email: e.target.value })}
                    className="form-control p-3"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    style={{ borderRadius: "5px" }}
                    type="number"
                    id="number"
                    name="number"
                    value={clientDetails.mobileNumber}
                    onChange={(e) =>
                      handleForm({ mobileNumber: e.target.value })
                    }
                    className="form-control p-3"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    style={{ borderRadius: "5px" }}
                    type="text"
                    id="message"
                    name="message"
                    value={clientDetails.message}
                    onChange={(e) => handleForm({ message: e.target.value })}
                    className="form-control md-textarea p-3"
                    placeholder="Your message"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <input
                style={{ borderRadius: "5px" }}
                type="submit"
                className="btn btn-primary large"
              />
            </div>
            <ToastContainer hideProgressBar={true} />
          </form>
        </div>

        {/* Address part */}
        <div className="col-md-5 p-4">
          <div className="row">
            <div className="col-12 pt-3 mb-4">
              <div>
                <p style={{fontSize:"0.9em"}}>
                  <span style={{ paddingRight: "20px" }}>
                    <HomeIcon style={{fontSize:"1.4em"}} />
                  </span>
                  Chennai-600050
                </p>
              </div>
              <div>
                <p  style={{fontSize:"0.9em"}}>
                  <span style={{ paddingRight: "20px" }}>
                    <LocalPhoneIcon style={{fontSize:"1.4em"}} />
                  </span>
                  +91- 8637656612
                </p>
              </div>
              <div>
                <p  style={{fontSize:"0.9em"}}>
                  <span style={{ paddingRight: "20px" }}>
                    <EmailIcon style={{fontSize:"1.4em"}} />
                  </span>
                  rajeshs1097@gmail.com
                </p>
              </div>
            </div>

            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31087.846357532337!2d80.1692240055797!3d13.100403158364452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263f71ccaa7c7%3A0x4eaca488332e5dbe!2sPadi%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1680244346269!5m2!1sen!2sin"
                style={{ border: "0", width: "100%", height: "200px" }}
                allowFullScreen=""
                loading="lazy"
                title="Map"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
