import React, { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";
import SearchPage from "../pages/SearchPage";
import CartPage from "../pages/CartPage";
import ProfilePage from "../pages/ProfilePage";
import DetailsPage from "../pages/DetailsPage";
import OnboardingPage from "../pages/OnboardingPage";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import ErrorPage from "../pages/ErrorPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ShopPage from "../pages/ShopPage";
import { useDispatch, useSelector } from "react-redux";
import StateLoader from "../components/StateLoader";
import {
  fetchBannerData,
  fetchCategoryData,
} from "../redux/slices/commonSlice";
import { priceCalculator, setProducts } from "../redux/slices/ProductSlice";

export default function Layout() {
  const [loading, setLoading] = useState(false);
  // console.log(loading);
  const loginState = useSelector((state) => state.userSlice.loginStatus);
  const productState = useSelector((state) => state.productSlice.loading);
  const commonState = useSelector((state) => state.commonSlice.loading);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    if (
      loginState === "active" &&
      (location.pathname === "/sign-in" || location.pathname === "/sign-up")
    ) {
      navigate("/");
      setLoading(false);
    } else if (loginState === "loading") {
      setLoading(true);
    }
  }, [loginState]);

  useEffect(() => {
    if (productState === "loading" || commonState === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [productState]);

  useEffect(() => {
    if (loginState === "active") {
      dispatch(fetchBannerData());
      dispatch(fetchCategoryData());
      const getItem = JSON.parse(localStorage.getItem("products"));
      dispatch(setProducts(getItem));
    }
  }, [loginState]);

  // if (loading) {
  //   return <StateLoader />;
  // }

  if (loginState === "inactive" || loginState === "loading") {
    return (
      <>
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </>
    );
  } else if (loginState === "active") {
    return (
      <>
        <Header />
        <SearchBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/shop/:name" element={<ShopPage />} />
          <Route path="/details/:slug" element={<DetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <div className="grocery-bottom-spacing" />
        <Footer />
      </>
    );
  }
}
