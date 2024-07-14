import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Loader = () => {
  const location = useLocation();

  useEffect(() => {
    const handleLoad = () => {
      document.querySelector("body").classList.add("loaded");
    };

    document.querySelector("body").classList.remove("loaded");

    setTimeout(handleLoad, 0);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [location]);

  return (
    <div className="min-loader-wrapper">
      <img
        src="images/favicon/3.svg"
        className="img-fluid loader"
        alt="Loader"
      />
      <div className="loader-section grocery-color section-left" />
      <div className="loader-section grocery-color section-right" />
    </div>
  );
};

export default Loader;
