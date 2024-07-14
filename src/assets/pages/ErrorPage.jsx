import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <section className="error-page">
        <div className="custom-container">
          <div className="error-box">
            <div className="error-image">
              <img
                src="images/grocery/404.png"
                className="img-fluid"
                alt="404 image"
              />
            </div>
            <div className="error-contain">
              <p>
                We apologies; we were unable to locate the page you requested.
                Return to the home page, if you would.
              </p>
              <Link to="/" className="grocery-btn theme-btn">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
