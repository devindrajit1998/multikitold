import React from "react";

export default function StateLoader() {
  return (
    <>
      <div className="loader_box">
        <div className="loader_mini">
          <div className="load-inner load-one"></div>
          <div className="load-inner load-two"></div>
          <div className="load-inner load-three"></div>
          <span className="text">Loading...</span>
        </div>
      </div>
    </>
  );
}
