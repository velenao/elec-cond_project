import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import linkGoTop from "./linkGoTop.js";
import "./style.css";

export const LinkGoTop = () => {
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowLink(true);
      } else {
        setShowLink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      className={`linkGoTop ${showLink ? "showLink" : "hideLink"}`}
      onClick={linkGoTop}
    >
      &#129045;
    </Link>
  );
};
