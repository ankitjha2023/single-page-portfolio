import React from 'react'
import img from "../images/aboutme.png"
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6" data-aos="fade-right">
          <img src={img} alt="about" className='img-fluid'/>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start" data-aos="fade-left">
            <h1 className='display-5'>About Me</h1>
            <p>Hey there, I'm Ankit Jha. I'm a BCA student currently living in Bhagalpur, India. I have always been passionate about technology and have a strong interest in programming and software development. I am constantly looking for ways to improve my skills and stay up-to-date with the latest technologies. In my free time, I enjoy tinkering with new software and technologies, as well as staying active through sports and outdoor activities. I am excited to use my skills and knowledge to make a positive impact in the field of computer science and am always open to new opportunities and challenges. Thank you for visiting my portfolio website.</p>
           <Link to="/contact"><button className='btn btn-outline-primary'>Contact Me</button></Link>
        </div>
      </div>
    </div>
  )
}

export default About
