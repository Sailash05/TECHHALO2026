import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-container">

      <div className="logo-section">
        <img src={logo} alt="College Logo" className="logo-img" />
        <span className="logo-text">TECHHALO'26</span>
      </div>

      {/* MENU ICON */}
      <div 
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* NAV LINKS */}
      <nav className={`nav-top ${menuOpen ? "active" : ""}`}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/coordinators">Coordinators</NavLink>
        <NavLink to="/sponsors">Sponsors</NavLink>
        <NavLink to="/about-us">About</NavLink>
      </nav>

    </header>
  );
};

export default Navbar;