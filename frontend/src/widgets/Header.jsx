import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";

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
    <header className="header">
      <div className="logo">
        <Link to={headerData.firstItem.link}>{headerData.firstItem.text}</Link>
      </div>
      <nav className="nav">
        <ul>
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
          {(currentPath === "/electric" || currentPath === "/conditioners") && (
            <li>
              <Link to={currentPath === "/electric" ? headerData.lastItem[1].link : headerData.lastItem[0].link}>
              {currentPath === "/electric" ? headerData.lastItem[1].text : headerData.lastItem[0].text}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
