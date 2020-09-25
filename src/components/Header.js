import React from "react";
import logo from "./static/hll_logo copy.png";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <div className="header">
      <Nav image={logo} />
      
    </div>
  );
};

export default Header;

