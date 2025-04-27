import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to={"/"} className="logo-link">
          <img src="/HMCTS_logo.png" alt="HMCTS Logo" className="logo" />
          <h1 className="appName">Task Case Manager</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
