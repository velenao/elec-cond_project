import React from "react";
import "./style.css";
import { Nav } from "shared/global/ui/nav/Nav";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>+7-999-084-14-03</h1>
        </div>
        <Nav />
      </div>
    </>
  );
};
