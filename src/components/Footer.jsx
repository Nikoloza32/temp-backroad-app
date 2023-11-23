import React from "react";
import { PagesLinks } from "./PagesLinks";
import { SocialLink } from "./SocialLink";
import { socialLink } from "../data";

export const Footer = () => {
  return (
    <footer className="section footer">
      <PagesLinks perentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLink.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />;
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().ful}</span> all rights reserved
      </p>
    </footer>
  );
};
