import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUser,
  logout,
  uploadAvatarAsync,
} from "../redux/slices/UserSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // fetch profile information
  const profileData = useSelector((state) => state.userSlice.user);

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  // console.log("profileData", profileData);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/sign-in");
  };

  // update profile avatar
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChangeAvatar = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  // console.log("file", file);
  // console.log("preview", preview);

  const uploadAvatar = async () => {
    const userId = profileData?.id;
    if (file) {
      const formData = new FormData();
      formData.append("files", file);
      await dispatch(uploadAvatarAsync({ formData, userId }));
      setOpen(false);
      dispatch(fetchUser(userId));
    } else {
      alert("Please select an avatar");
    }
  };

  return (
    <>
      <section className="profile-box-section">
        <div className="custom-container">
          <div className="profile-box">
            <div className="profile-image pointer" onClick={handleOpenModal}>
              <img
                src={profileData?.avatar?.url}
                className="img-fluid"
                alt
              />
            </div>
            <div className="profile-name">
              <h4>{profileData?.name}</h4>
              <h5>{profileData?.email}</h5>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="custom-container">
          <ul className="setting-list-box">
            <li>
              <a href="#" className="setting-box">
                <i class="fa-light fa-files" />
                <h5>Orders</h5>
              </a>
            </li>
            <li>
              <a href="#" className="setting-box">
                <i class="fa-thin fa-heart" />
                <h5>Your Wishlist</h5>
              </a>
            </li>
            <li>
              <a href="#" className="setting-box">
                <i class="fa-thin fa-credit-card" />
                <h5>Payment</h5>
              </a>
            </li>
            <li>
              <a href="#" className="setting-box">
                <i class="fa-sharp fa-thin fa-map-location-dot" />
                <h5>Saved Address</h5>
              </a>
            </li>
            <li>
              <a href="#" className="setting-box">
                <i class="fa-thin fa-language" />
                <h5>Language</h5>
              </a>
            </li>
            <li>
              <a href="#" className="setting-box">
                <i class="fa-thin fa-bell" />
                <h5>Notification</h5>
              </a>
            </li>
            <li>
              <a href="#" className="setting-box">
                <i class="fa-sharp fa-thin fa-gear" />
                <h5>Settings</h5>
              </a>
            </li>
          </ul>
          <button className="grocery-btn border-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </section>
      {open && (
        <>
          <div className="modal d-block avatar_modal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <button className="close" onClick={handleCloseModal}>
                    <i class="fa-sharp fa-thin fa-circle-xmark"></i>
                  </button>
                  {preview === null ? (
                    <>
                      <label className="custum-file-upload" htmlFor="file">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill
                            viewBox="0 0 24 24"
                          >
                            <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                            <g
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              id="SVGRepo_tracerCarrier"
                            />
                            <g id="SVGRepo_iconCarrier">
                              <path
                                fill
                                d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className="text">
                          <span>Click to upload image</span>
                        </div>
                        <input
                          type="file"
                          id="file"
                          onChange={handleChangeAvatar}
                        />
                      </label>
                    </>
                  ) : (
                    <>
                      <div className="prev">
                        <img src={preview} alt="" />
                      </div>
                      <button
                        class="grocery-btn theme-btn mt-5"
                        onClick={uploadAvatar}
                      >
                        Update Avatar
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="overlay_custom"></div>
        </>
      )}
    </>
  );
}
