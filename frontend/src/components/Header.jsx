import React from "react";
import { useLocation } from "react-router";

export const Header = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <div className="header">
        <div className="logo"> Header </div>
        <ul className="nav">
          <li>
            <a href="1">о нас</a>
          </li>
          <li>
            <a href="1">услуги</a>
          </li>
          <li>
            <a href="1">контакты</a>
          </li>
          <li>
            <a href="1">работы</a>
          </li>
          <li>
            <a href="1">прайс</a>
          </li>
          {location.pathname === "/electric" && (
            <div>
              <li>
                <a href="1">эл</a>
              </li>
            </div>
          )}
          {location.pathname === "/conditioners" && (
            <li>
              <a href="1">конд</a>
            </li>
          )}
        </ul>
      </div>
    </React.Fragment>
  );
};
