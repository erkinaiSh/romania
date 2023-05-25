import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

import "./NavbarStyles.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const renderNavLinks = () => (
    <ul className="nav-menu">
      <Link to="history" smooth={true} duration={500}>
        <li>Home</li>
      </Link>
      <Link to="button" smooth={true} duration={500}>
        <li>About</li>
      </Link>
      <Link to="about" smooth={true} duration={500}>
        <li>History</li>
      </Link>
      <Link to="carousel" smooth={true} duration={500}>
        <li>TouristicPlaces</li>
      </Link>
    </ul>
  );

  const renderMobileNavLinks = () => (
    <ul className="mobile-nav">
      <Link to="history" smooth={true} duration={500}>
        <li>Home</li>
      </Link>
      <Link to="button" smooth={true} duration={500}>
        <li>About</li>
      </Link>
      <Link to="about" smooth={true} duration={500}>
        <li>History</li>
      </Link>
      <Link to="carousel" smooth={true} duration={500}>
        <li>Touristic Places</li>
      </Link>
      
    </ul>
  );

  return (
    <div name="home" className={`navbar ${nav ? "navbar-bg" : ""}`}>
      <div className={`logo ${nav ? "dark" : ""}`}>
        <h2>ROMANIA</h2>
      </div>

      {renderNavLinks()}

      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>

      <div className={`mobile-menu ${nav ? "active" : ""}`}>
        {renderMobileNavLinks()}
      </div>
    </div>
  );
}

export default Navbar;