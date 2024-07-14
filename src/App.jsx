import React, { useEffect } from "react";
import Layout from "./assets/Layout/Layout";
import { register } from "swiper/element/bundle";
import { BrowserRouter } from "react-router-dom";
import Loader from "./assets/components/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUser,
  setLoginStatus,
  setToken,
} from "./assets/redux/slices/UserSlice";

export default function App() {
  const appSession = useSelector((state) => state.userSlice.loginStatus);
  const dispatch = useDispatch();

  // register swiper slider
  register();

  // check Session
  const session = JSON.parse(sessionStorage.getItem("session"));
  useEffect(() => {
    if (session !== null) {
      dispatch(setLoginStatus("active"));
      dispatch(setToken(session.jwt));
    }
  }, []);
  console.log("appSession", appSession);

  //update user state

  const id = session?.user?.id;
  // console.log("session", id);
  useEffect(() => {
    dispatch(fetchUser(id));
  }, [session,appSession]);
  return (
    <>
      <BrowserRouter>
        <Loader />
        <Layout />
      </BrowserRouter>
    </>
  );
}
