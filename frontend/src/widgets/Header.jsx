import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";

export const Header = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <div className="header">
        <div className="logo">
          <Link to={"/"} href="/">
            главная
          </Link>
        </div>
        <ul className="nav">
          <li>
            <Link to={"#"} href="1">
              о нас
            </Link>
          </li>
          <li>
            <Link to={"#"} href="1">
              услуги
            </Link>
          </li>
          <li>
            <Link to={"#"} href="1">
              контакты
            </Link>
          </li>
          <li>
            <Link to={"#"} href="1">
              работы
            </Link>
          </li>
          <li>
            <Link to={"#"} href="1">
              прайс
            </Link>
          </li>
          {location.pathname === "/electric" && (
            <div>
              <li>
                <Link to={"/conditioners"} href="/conditioners">
                  конд
                </Link>
              </li>
            </div>
          )}
          {location.pathname === "/conditioners" && (
            <li>
              <Link to={"/electric"}>
                эл
              </Link>
            </li>
          )}
        </ul>
      </div>
    </React.Fragment>
  );
};
