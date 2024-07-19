import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Footer() {
  const cartQuantity = useSelector((state) => state.cartSlice.totalQuantity);
  return (
    <>
      <div className="mobile-style-6">
        <ul>
          <li className="active">
            <Link to="/" className="mobile-box">
              <i className="fa-thin fa-house" />
              <h6>Home</h6>
            </Link>
          </li>
          <li>
            <Link to="/category" className="mobile-box">
              <i className="fa-thin fa-send-backward" />
              <h6>Category</h6>
            </Link>
          </li>
          <li>
            <Link to="/search" className="mobile-box">
              <i className="fa-sharp fa-thin fa-magnifying-glass" />
              <h6>Search</h6>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="mobile-box">
              <i className="fa-thin fa-cart-shopping" />
              {cartQuantity === 0 ? <></> : <span>{cartQuantity}</span>}
              <h6>Cart</h6>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="mobile-box">
              <i className="fa-thin fa-user" />
              <h6>Profile</h6>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
