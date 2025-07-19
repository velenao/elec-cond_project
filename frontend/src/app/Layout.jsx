import React from "react";
import { useLocation } from "react-router";

import { Header } from "../widgets/global/ui/header";
import { Footer } from "../widgets/global/ui/footer/Footer";
import { LinkGoTop } from "shared/global/ui/linkGoTop";

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
            <LinkGoTop />
            {currentPath !== "/conditioners" && currentPath !== "/electric" && (
              <Footer />
            )}
          </>
        )}
        {currentPath === "/" && children}
      </div>
    </>
  );
};
