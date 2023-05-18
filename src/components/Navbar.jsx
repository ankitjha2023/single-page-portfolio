import React, { useState } from 'react';
import links from '../api/Navbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const toggleIconClass = isToggled ? 'fa-xmark' : 'fa-bars';

  return (
    <nav className="navbar navbar-expand-lg py-3" data-aos="fade-down">
      <div className="container">
        <h2 className='navbar-brand fs-4 '>Portfolio</h2>
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
          <i className={`fa-solid ${toggleIconClass}`}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link.name}>
                <Link className="nav-link" to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
