import React from "react";

export const SocialLink = ({ itemClass, icon, href }) => {
  return (
    <li>
      <a href={href} target="_blank" className={itemClass} rel="norefrrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};
