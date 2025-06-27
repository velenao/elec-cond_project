import React from "react";
import { useLocation } from "react-router";

import { Header } from "../widgets/ui/header";
import { Footer } from "../widgets/Footer";

export const Layout = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className="container">
        {currentPath !== "/" && (
          <>
            <Header />
            <div className="contentContainer">{children}</div>
            <Footer />
          </>
        )}
        {currentPath === "/" && children}
      </div>
    </>
  );
};
