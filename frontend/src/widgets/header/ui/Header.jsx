import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";
import './style.css'

const headerData = {
  firstItem: { text: "главная", link: "/" },
  mainItems: [
    { text: "о нас", linkElectric: "/", linkConditioners: "/" },
    { text: "услуги", linkElectric: "/", linkConditioners: "/" },
    { text: "контакты", linkElectric: "/", linkConditioners: "/" },
    { text: "работы", linkElectric: "/", linkConditioners: "/" },
    { text: "прайс", linkElectric: "/", linkConditioners: "/" },
  ],
  lastItem: [
    { text: "электрика", link: "/electric" },
    { text: "кондиционеры", link: "/conditioners" },
  ],
};

export const Header = () => {
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
        <Link to={headerData.firstItem.link}>{headerData.firstItem.text}</Link>
          {headerData.mainItems.map((item, index) => (
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
          {(currentPath === "/electric") && (
            <li>
              <Link to={headerData.lastItem[1].link}>
              {headerData.lastItem[1].text}
              </Link>
            </li>
          )}
            {(currentPath === "/conditioners") && (
            <li>
              <Link to={headerData.lastItem[0].link}>
              {headerData.lastItem[0].text}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
    </>
  );
};
