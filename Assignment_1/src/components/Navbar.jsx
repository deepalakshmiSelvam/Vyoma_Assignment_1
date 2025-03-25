import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="nav_left">
        <Link to="/"><img src="src/assets/Vyoma_Logo.png" alt="Vyoma_Logo" /></Link>
      </div>
      <div className="nav_links">
            <Link to="/" className="link">Home</Link>
            <Link to="/enquiry" className="link">Enquiry</Link>
            <Link to="/pricingPage" className="link">PricingPage</Link>
      </div>
    </div>
  );
};

export default Navbar;
