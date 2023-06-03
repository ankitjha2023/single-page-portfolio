import React from 'react'

import myskills from '../api/Skill'
const Skills = () => {
  return (
    <section id='skills'>
      <div className='container'>
      <div className="row">
        <div className="col-lg-6 col-12  d-flex flex-column align-items-center justify-content-center" data-aos="fade-right">
          <img src="/skill.png" alt="skill" className='img-fluid' />
        </div>
        <div className="col-lg-6 col-12  d-flex flex-column justify-content-center p-lg-4" data-aos="fade-left">
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
    </section>
  )
}

export default Skills
