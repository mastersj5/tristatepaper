import React from "react";
//import { NavBarButton } from "../../..";
import "./navbarbutton.css";

export const NavBarButton = ({ buttonTextClassName, className, hover, subMenu, text }) => {
  return (
    <button
      className={`nav-bar-button-instance ${className}`}
      data-hover={hover}
      data-submenu={subMenu}
    >
      <span className={`design-component-instance-node ${buttonTextClassName}`}>{text}</span>
    </button>
  );
};