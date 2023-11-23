import React from "react";
import logo from "../images/logo.svg";
import { PagesLinks } from "./PagesLinks";
import { socialLink } from "../data";
import { SocialLink } from "./SocialLink";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PagesLinks perentClass="nav-links" itemClass="nav-link" />
        <ul className="nav-icons">
          {socialLink.map((link) => {
            return <SocialLink key={link.id} itemClass="nav-icon" {...link} />;
          })}
        </ul>
      </div>
    </nav>
  );
};
