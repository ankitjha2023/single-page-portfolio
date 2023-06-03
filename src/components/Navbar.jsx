import React, { useState } from 'react';
import links from '../api/Navbar';
import { Link } from 'react-router-dom';

const Navbar = ({toggleMode,mode}) => {
  const [isToggled, setIsToggled] = useState(false);
  let navLinkClass
  if(mode=='light'){
    navLinkClass == 'text-dark'
  }else{
    navLinkClass ="text-light"
  }
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const toggleIconClass = isToggled ? 'fa-xmark' : 'fa-bars';

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <img src="/photo.jpeg" className="img-fluid rounded-circle" width={60} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <i className={`fa-solid ${toggleIconClass} fs-3 ${mode}`}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {links.map((link) => (
                <li className="nav-item" key={link.name}>
                  <Link className={`nav-link ${navLinkClass}`} to={link.path}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="form-check form-switch" onClick={toggleMode}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />

            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
