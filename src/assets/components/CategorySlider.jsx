import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProductsByCategory } from "../redux/slices/ProductSlice";

export default function CategorySlider() {
  const categoryData = useSelector((state) => state.commonSlice.category);
  const url = useSelector((state) => state.productSlice.url);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleCategory = async (e, categoryName) => {
    e.preventDefault();
    // dispatch(getProductsByCategory(url));
    navigate(`/shop/${categoryName}`);
  };

  return (
    <>
      <section>
        <div className="title mb-10 px-15">
          <h4>Category</h4>
        </div>
        <div className="px-15 grocery-category-slider grocery-category-box">
          <swiper-container
            slides-per-view="3"
            speed="500"
            loop="false"
            space-between="20"
          >
            {categoryData?.data?.map((items) => (
              <div className="swiper-slide" key={items.id}>
                <Link
                  to="#"
                  onClick={(e) => handleCategory(e, items.attributes.name)}
                >
                  <img
                    src={items?.attributes.image.data.attributes.url}
                    className="img-fluid"
                    alt={items.attributes.name}
                  />
                  <span>{items.attributes.name}</span>
                </Link>
              </div>
            ))}
          </swiper-container>
        </div>
      </section>
    </>
  );
}
