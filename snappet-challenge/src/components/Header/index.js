import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { ReactComponent as GiftIcon } from "../../assets/icons/gift.svg";

function Header() {
  // Leaving Link placeholders for navigation links:
  return (
    <div className="header-body">
      <div className="top-box">
        <div className="navigation">
          <Link to="/" className="link">
            Dashboard
          </Link>{" "}
          /{" "}
          <Link to="/" className="link">
            Snappet
          </Link>{" "}
          /
        </div>
        <div className="title">
          <GiftIcon className="gift-icon" />
          Front-End Challenge
        </div>
      </div>
      <div className="bottom-box"></div>
    </div>
  );
}

export default Header;
