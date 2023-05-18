import React from 'react'
import img from "../images/project.png"
import myskills from '../api/Skill'
const Skills = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 p-5 d-flex flex-column align-items-center justify-content-center" data-aos="fade-right">
          <img src={img} alt="skill" className='img-fluid' />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center p-lg-4" data-aos="fade-left">
          <h1 className='display-5 mb-3'>My Skills</h1>

          {
            myskills.map((skill) => {
              return (


               <div key={skill.name}>
              
               <div 
                  className="progress"
                  role="progressbar"
                  aria-label="striped example"
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >

                  <div className={`progress-bar  progress-bar-striped progress-bar-animated ${skill.className}`} style={{ width: `${skill.percentage}` }} />
                </div>
                <p>{skill.name}</p>
               </div>

              )
            })
          }



        </div>
      </div>
    </div>
  )
}

export default Skills
