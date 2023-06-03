import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
   <section id='about'>
     <div className='container'>
      <div className="row">
        <div className="col-lg-4 col-md-12" data-aos="fade-right">
          <img src="/aboutme.png" alt="about" className='img-fluid'/>
        </div>
        <div className="col-lg-8 col-md-12 d-flex flex-column justify-content-center align-items-start" data-aos="fade-left">
            <h1 className='display-5'>About Me</h1>
            <p>Hey there, I'm Ankit Jha. I'm a BCA student currently living in Bhagalpur, India. I have always been passionate about technology and have a strong interest in programming and software development. I am constantly looking for ways to improve my skills and stay up-to-date with the latest technologies. In my free time, I enjoy tinkering with new software and technologies, as well as staying active through sports and outdoor activities. I am excited to use my skills and knowledge to make a positive impact in the field of computer science and am always open to new opportunities and challenges. Thank you for visiting my portfolio website.</p>
           <Link to="/contact"><button className='btn btn-outline-primary'>Contact Me</button></Link>
        </div>
      </div>
    </div>
   </section>
  )
}

export default About
