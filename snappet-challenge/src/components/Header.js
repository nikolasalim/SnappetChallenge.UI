import React from "react";
import { Link } from "react-router-dom";

function Header() {
  // Leaving Link placeholders for navigation links:
  return (
    <div>
      <div className="top-box">
        <div className="navigation">
          <Link to="/">Dashboard</Link> / <Link to="/">Snappet</Link> /
        </div>
        <div className="title">Front-End Challenge</div>
      </div>
      <div className="bottom-box"></div>
    </div>
  );
}

export default Header;
