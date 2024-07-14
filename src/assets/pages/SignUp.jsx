import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../redux/slices/UserSlice";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      ...(name === "email" && { username: value }),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  console.log(formData);

  return (
    <>
      <div className="grocery-authentication">
        <div className="custom-container">
          <div className="logo-content">
            <img
              src="images/logo/6.svg"
              className="img-fluid logo"
              alt="logo"
            />
            <p>
              Online Supermarket for all your daily needs. You are just one
              click away from your all needs at your doorstep.
            </p>
          </div>
          <div className="auth-box">
            <div className="auth-title">
              <h4>Signup Account</h4>
            </div>
            <form className="form-style-7" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-box mb-19">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  onChange={handleChange}
                  name="name"
                  value={formData.name}
                />
                <i className="fa-thin fa-user" />
              </div>
              <div className="form-box mb-19">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
                <i className="fa-thin fa-envelope" />
              </div>
              <div className="form-box mb-19">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                />
                <i className="fa-thin fa-lock" />
              </div>
              <div className="form-box mb-19 d-none">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  readOnly
                />
                <i className="fa-thin fa-user" />
              </div>
              <button type="submit" className="grocery-btn theme-btn">
                Sign Up
              </button>
              <h5 className="text-center mt-3">
                <Link to="/sign-in" className="content-color">
                  I'm already a member
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
