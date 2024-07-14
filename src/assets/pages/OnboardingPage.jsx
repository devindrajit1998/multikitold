import React from "react";
import { Link } from "react-router-dom";

export default function OnboardingPage() {
  return (
    <>
      <div className="grocery-onboarding">
        <div className="onbording-container">
          <div className="onborder-content">
            <img
              src="images/logo/6.svg"
              className="img-fluid onbording-logo"
              alt
            />
            <h2>Get Safe Delivery At Your Door Step</h2>
            <div className="onbording-button-group">
              <Link to="/sign-in" className="grocery-btn white-btn">
                Sign in
              </Link>
              <Link to="/sign-up" className="grocery-btn theme-btn">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
