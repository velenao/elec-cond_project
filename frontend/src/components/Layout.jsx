import React from "react";
import { useLocation } from "react-router";

import { Header } from "./Header";
import { Footer } from "./Footer";

const offHeaderFooter = (path) => path !== "/";

export const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <React.Fragment>
      <div className="container">
        {offHeaderFooter(location.pathname) && (
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        )}
        {!offHeaderFooter(location.pathname) && children}
      </div>
    </React.Fragment>
  );
};

