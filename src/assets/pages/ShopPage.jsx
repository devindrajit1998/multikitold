import React, { useEffect, useRef } from "react";
import CategorySlider from "../components/CategorySlider";
import ProductList from "../components/ProductList";
import CartBox from "../components/CartBox";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory, setUrl } from "../redux/slices/ProductSlice";

export default function ShopPage() {
  const { name } = useParams();
  console.log("url: " + name);
  const dispatch = useDispatch();
  const prevCategory = useSelector((state) => state.productSlice.url);
  // const prevCategoryRef = useRef(name);
  console.log("prevCategory", prevCategory);
  useEffect(() => {
    console.log("Category changed to:", name);
    const getUrl = JSON.parse(localStorage.getItem("url"));
    dispatch(setUrl(getUrl));
    if (prevCategory !== name) {
      dispatch(setUrl(name));
      dispatch(getProductsByCategory(name));
    }
  }, [name, dispatch]);

  return (
    <>
      <CategorySlider />
      <ProductList />
      <CartBox />
    </>
  );
}
