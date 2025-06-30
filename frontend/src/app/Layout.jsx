import React from "react";
import { useLocation } from "react-router";

import { Header } from "../widgets/global/ui/header";
import { Footer } from "../widgets/global/ui/footer/Footer";

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
            {currentPath !== "/conditioners" && <Footer />}
          </>
        )}
        {currentPath === "/" && children}
      </div>
    </>
  );
};
