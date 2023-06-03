import React from 'react'

const Projects = () => {
  return (
    <section id='projects'>
      <div className='container'>
    <div className="row">
        <div className="col-lg-6 col-md-12 " data-aos="fade-right">
            <img src="/project.png" alt="project" className='img-fluid'/>
        </div>
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center  gap-2" data-aos="fade-left">
            <h1>My Projects</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate molestiae culpa commodi, fugiat itaque dolore nihil accusamus corrupti explicabo corporis sit iste mollitia dolores. Mollitia quo voluptatum nam, tempora facere molestias, ut repellat quam ab possimus sed voluptatibus excepturi culpa quaerat. Impedit veniam quod eaque deserunt enim repellat voluptatum pariatur iure ex eius quaerat velit neque fugit sunt, sint dolorum similique. Dolores illum delectus eligendi labore, saepe veritatis! Veniam.</p>
           <a href="https://github.com/ankitjha2023" target='_blank'> <button className='btn btn-outline-primary'>View</button></a>
        </div>
    </div>
    </div>
    </section>
  )
}

export default Projects
