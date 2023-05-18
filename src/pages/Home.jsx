import React from 'react'
import img from "../images/home.webp"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='container mt-5' id='home'>
      <div className="row flex-wrap-reverse">
        
        <div className="col-md-6 d-flex flex-column justify-content-center" data-aos="fade-right">
          <h1 className='display-5'>Hello I'm Ankit Jha</h1>
          <p>I am a frontend Developer and a youtuber</p>
         <div className="d-flex gap-2">
        <div className="buttons d-flex gap-2">
        <a href="resume.jpg"><button className='btn btn-outline-primary'>My Resume</button></a>
          <Link to="/about"><button className='btn btn-outline-primary'>Read More</button></Link>
        </div>
         </div>
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <img src={img} alt="home" className='img-fluid' />
        </div>
      </div>
    </section>
  )
}

export default Home
