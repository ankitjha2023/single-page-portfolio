import React from 'react'
import icons from '../api/SocialMedia'
const Footer = ({mode}) => {
  let iconClass 
  if(mode=="light"){
    iconClass ="text-dark"
  }
  if(mode=="dark"){
    iconClass="text-light"
  }
  return (
    <footer className='container-fluid mt-5 py-3'>
       
            <div className="row">
              
              <div className="col-md-6 d-flex align-items-center justify-content-center gap-4 fs-5">
              
                
                {
                  icons.map((icon)=>{
                    return(
                      <a href={icon.url} key={icon.id} target='_blank'><i className={`${icon.class} ${iconClass}`}></i></a>
                    )
                  })
                }

            
              </div>
              <div className="col-md-6 mt-2">
              <p className="text-center">Developed By Ankit Jha</p>
              </div>
            </div>
           
           
       
    </footer>
  )
}

export default Footer
