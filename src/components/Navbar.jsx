import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  return (
    <header className="navbar-container">

      <div className="logo-section">
        <img src={logo} alt="College Logo" className="logo-img" />
        <span className="logo-text">TECHHALO'26</span>
      </div>

      <nav className="nav-top">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/coordinators">Coordinators</NavLink>
        <NavLink to="/about-us">About</NavLink>
      </nav>

    </header>
  );
};

export default Navbar;