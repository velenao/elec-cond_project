import React from "react";

export const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo"> Header </div>
        <ul className="nav">
          <li className="nav_item">о нас</li>
          <li className="nav_item">услуги</li>
          <li className="nav_item">контакты</li>
          <li className="nav_item">работы</li>
          <li className="nav_item">прайс</li>
          <li className="nav_item">эл/конд</li>
        </ul>
      </div>
    </React.Fragment>
  );
};
