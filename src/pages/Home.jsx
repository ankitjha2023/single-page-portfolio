import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='container' id='home'>
      <div className="row">
        
       
        <div className="col-lg-6 col-12" data-aos="fade-right">
          <img src="/home.webp" alt="home" className='img-fluid' />
        </div>
        <div className="col-lg-6 col-12 d-flex flex-column justify-content-center" data-aos="fade-left">
          <h1 className='display-5'>Hello I'm Ankit Jha</h1>
          <p>I am a frontend Developer and a youtuber</p>
         <div className="d-flex gap-2">
        <div className="buttons d-flex gap-2">
        <a href="resume.jpg"><button className='btn btn-outline-primary'>My Resume</button></a>
          <Link to="/about"><button className='btn btn-outline-primary'>Read More</button></Link>
        </div>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Home
