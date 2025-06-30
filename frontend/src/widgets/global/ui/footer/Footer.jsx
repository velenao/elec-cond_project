import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";
import "./style.css";
import { headerLink } from "../../data/headerLink";

export const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>+7-999-084-14-03</h1>
        </div>
        <nav className="nav">
          <ul>
            <Link to={headerLink.firstItem.link}>
              {headerLink.firstItem.text}
            </Link>
            {headerLink.mainItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={
                    currentPath.includes("/electric")
                      ? item.linkElectric
                      : item.linkConditioners
                  }
                >
                  {item.text}
                </Link>
              </li>
            ))}
            {currentPath === "/electric" && (
              <li>
                <Link to={headerLink.lastItem[1].link}>
                  {headerLink.lastItem[1].text}
                </Link>
              </li>
            )}
            {currentPath === "/conditioners" && (
              <li>
                <Link to={headerLink.lastItem[0].link}>
                  {headerLink.lastItem[0].text}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};
