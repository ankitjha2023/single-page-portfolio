import React from 'react'

const Footer = () => {
  return (
    <footer className='container-fluid mt-5 py-3' data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
       
            <div className="row">
              
              <div className="col-md-6 d-flex align-items-center justify-content-center gap-4 fs-5">
              
                <a href="https://bit.ly/3XubLzN"><i className='fa-brands fa-github '></i></a>
                <a href="https://bit.ly/3G0NCKd"><i className='fa-brands fa-linkedin '></i></a>
                <a href="https://bit.ly/3i3MY6H"><i className='fa-brands fa-twitter'></i></a>

            
              </div>
              <div className="col-md-6 mt-2">
              <p className="text-center text-primary">2022 &copy; Developed By Ankit Jha</p>
              </div>
            </div>
           
           
       
    </footer>
  )
}

export default Footer
