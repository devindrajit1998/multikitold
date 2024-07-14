import React from "react";
import { Link } from "react-router-dom";

export default function CartBox() {
  return (
    <>
      <div className="bottom-shop">
        <div className="left-box">
          <h6>2 Items</h6>
          <h5>$250.00</h5>
        </div>
        <div className="right-box">
          <Link to="/cart">
            View Cart <i className="fa-thin fa-angle-right" />
          </Link>
        </div>
      </div>
    </>
  );
}
