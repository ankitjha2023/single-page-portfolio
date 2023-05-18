import React from 'react'
import img from "../images/skill.jpg"
const Projects = () => {
  return (
    <section id='projects' className='container'>
    <div className="row">
        <div className="col-md-6 p-5 d-flex align-items-center justify-content-center" data-aos="fade-right">
            <img src={img} alt="project" className='img-fluid'/>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center  gap-2" data-aos="fade-left">
            <h1>My Projects</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate molestiae culpa commodi, fugiat itaque dolore nihil accusamus corrupti explicabo corporis sit iste mollitia dolores. Mollitia quo voluptatum nam, tempora facere molestias, ut repellat quam ab possimus sed voluptatibus excepturi culpa quaerat. Impedit veniam quod eaque deserunt enim repellat voluptatum pariatur iure ex eius quaerat velit neque fugit sunt, sint dolorum similique. Dolores illum delectus eligendi labore, saepe veritatis! Veniam.</p>
           <a href="https://github.com/ankitjha2023" target='_blank'> <button className='btn btn-outline-primary'>View</button></a>
        </div>
    </div>
    </section>
  )
}

export default Projects
