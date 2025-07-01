import React from "react";
import "./style.css";
import { Contacts } from "shared/global/ui/contacts";
import { Nav } from "shared/global/ui/nav/Nav";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <Contacts />
        <Nav />
      </div>
    </>
  );
};
