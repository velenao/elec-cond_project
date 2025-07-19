import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import { globalLinks } from "../../data/globalLinks";

export const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className="nav">
        <ul>
          <Link to={globalLinks.firstItem.link}>
            {globalLinks.firstItem.text}
          </Link>
          {globalLinks.mainItems.map((item, index) => (
            <li key={index}>
              <HashLink
                to={
                  currentPath.includes("/electric")
                    ? item.linkElectric
                    : item.linkConditioners
                }
                smooth
              >
                {item.text}
              </HashLink>
            </li>
          ))}
          {currentPath.startsWith("/electric") && (
            <li>
              <Link to={globalLinks.lastItem[1].link}>
                {globalLinks.lastItem[1].text}
              </Link>
            </li>
          )}
          {currentPath.startsWith("/conditioners") && (
            <li>
              <Link to={globalLinks.lastItem[0].link}>
                {globalLinks.lastItem[0].text}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};
