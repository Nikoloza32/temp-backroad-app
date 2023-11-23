import React from "react";
import { pageLinks } from "../data";
import { PagesLink } from "./PagesLink";

export const PagesLinks = ({ itemClass, perentClass }) => {
  return (
    <ul className={perentClass}>
      {pageLinks.map((link) => {
        return <PagesLink key={link.id} link={link} itemClass={itemClass} />;
      })}
    </ul>
  );
};
