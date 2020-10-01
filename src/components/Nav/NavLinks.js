import React from "react";
import logo from "../static/hll_logo copy.png";
import { Link } from "react-router-dom";
function NavLinks(props) {
  return (
    <div>
      <div className={`nav-links ${props.state}`}>
        <img className="nav-img" alt="logo" src={logo} />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </div>
    </div>
  );
}

export default NavLinks;
