import React from 'react'
import img from "../images/contact.png"
const Contact = () => {
  return (
    <section className='container mt-5'>
      <div className="row">
        <div className="col-md-6" data-aos="fade-right">
            <img src={img} alt="contact" className='img-fluid' />
        </div>
        <div className="col-md-6" data-aos="fade-left">
        <h1>Contact Me</h1>
        <p>If you have any questions, please don't hesitate to fill out this form.</p>
        <form method='post' action='https://formspree.io/f/xvonkggg'>
 
    <div className="mb-3">
      <input
        type="text"
        className="form-control "
        id="name"
        name="name"
        required
        autoComplete="off"
        placeholder="Enter Your Name"
      />
    </div>
    <div className="mb-3">
      <input
        type="email"
        className="form-control"
        id="email"
        name="email"
        required
        autoComplete="off"
        placeholder="Enter Your Email"
        
      />
    </div>
    <div className="mb-3 ">
      <textarea
        name="message"
        id="message"
        rows={5}
        className="form-control "
        autoComplete="off"
        placeholder="Send me a message"
        defaultValue={""}
        required
      />
    </div>
   <button type="submit" className="btn btn-outline-primary">
      Submit
    </button>
  </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
