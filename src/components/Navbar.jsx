import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-top">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/coordinators">Coordinators</NavLink>
    </div>
  );
};

export default Navbar;