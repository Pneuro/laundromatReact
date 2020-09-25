import React from "react";
import logo from "../static/hll_logo copy.png";

function NavLinks(props) {
  return (
    <div>
      <div className={`nav-links ${props.state}`}>
        <img className="img-style nav-img" alt="logo" src={logo} />
        <li>Home</li>
        <li>About</li>
        <li>Coin Op</li>
        <li>Wash Fold</li>
        <li>Contact</li>
      </div>
    </div>
  );
}

export default NavLinks;
