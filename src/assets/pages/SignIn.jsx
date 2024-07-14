import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../redux/slices/UserSlice";

export default function SignIn() {
  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // console.log("loginData", loginData);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
  };

  return (
    <>
      <div className="grocery-authentication">
        <div className="custom-container">
          <div className="logo-content">
            <img src="images/logo/6.svg" className="img-fluid logo" alt />
            <p>
              Online Supermarket for all your daily needs. you are just One
              Click away from your all needs at your door step.
            </p>
          </div>
          <div className="auth-box">
            <div className="auth-title">
              <h4>Login Account</h4>
            </div>
            <form className="form-style-7" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-box mb-19">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="identifier"
                  onChange={handleChange}
                  value={loginData.identifier}
                />
                <i className="fa-thin fa-envelope" />
              </div>
              <div className="form-box mb-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={loginData.password}
                />
                <i className="fa-thin fa-lock" />
              </div>
              <h6 className="forgot-text text-end fw-normal mb-19">
                <Link to="/" className="content-color">
                  Forgot password?
                </Link>
              </h6>
              <button type="submit" className="grocery-btn theme-btn">
                Sign in
              </button>
              <h5 className="text-center mt-3">
                <Link to="/sign-up" className="content-color">
                  If you are new, Create Now
                </Link>
              </h5>
            </form>
          </div>
        </div>
      </div>
      <div className="grocery-bottom-spacing" />
    </>
  );
}
