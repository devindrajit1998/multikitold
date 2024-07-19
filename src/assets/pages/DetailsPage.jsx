import React, { useEffect } from "react";
import ThumbSlider from "../components/ThumbSlider";
import ProductSlider from "../components/ProductSlider";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addToCart } from "../redux/slices/CartSlice";

export default function DetailsPage() {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleAddToCart = (items) => {
    dispatch(addToCart(items));
  };

  const items = location?.state?.items || {};

  const imageData = items?.attributes?.alter?.data;

  return (
    <>
      <section className="main-product-section">
        <div className="slider-box">
          <div className="custom-container">
            <div className="product-slider-box">
              <ThumbSlider images={imageData} />
            </div>
          </div>
        </div>
        <div className="product-container px-15">
          <h4>{items?.attributes?.name}</h4>
          <div className="rating">
            <ul>
              <li>
                <i className="fa-sharp fa-solid fa-star fill" />
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-star fill" />
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-star fill" />
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-star-half-stroke fill" />
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-star" />
              </li>
            </ul>
            <span>(150 Ratings)</span>
          </div>
          <h3>
            ₹
            {(
              items?.attributes?.price -
              items?.attributes?.price * items?.attributes?.offer * 0.01
            ).toFixed(0)}
            <del>₹{items?.attributes?.price}</del>
          </h3>
          <p className="offer-tag">{items?.attributes?.offer}% Off</p>
          <button
            class="btn grocery-btn theme-btn mt-4"
            onClick={()=>handleAddToCart(items)}
          >
            ADD TO CART
          </button>
        </div>
      </section>

      <section className="section-t-space-3">
        <div className="custom-container">
          <div className="description-box">
            <div className="title">
              <h4>Description</h4>
              <p>{items?.attributes?.description}</p>
            </div>
            <div
              className="accordion accordion-style-1"
              id="accordionPanelsStayOpenExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                  >
                    Manufacturer Details
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body">
                    <p>
                      Name : {items?.attributes?.brand?.data?.attributes?.name}
                    </p>
                    <p>
                      Address :{" "}
                      {items?.attributes?.brand?.data?.attributes?.address}
                    </p>
                    <p>
                      Contact :{" "}
                      {items?.attributes?.brand?.data?.attributes?.email}
                    </p>
                    <p>
                      Website :{" "}
                      <Link
                        to={items?.attributes?.brand?.data?.attributes?.website}
                      >
                        {items?.attributes?.brand?.data?.attributes?.website}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                  >
                    Product Disclaimer
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <p>
                      Every taste of Italian cuisine served with a grin is a
                      celebration. One day at a time, our goal is to make you
                      happy and provide you with a delicious supper. Why not
                      adore it?
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                  >
                    Features &amp; details
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <p>
                      Every taste of Italian cuisine served with a grin is a
                      celebration. One day at a time, our goal is to make you
                      happy and provide you with a delicious supper. Why not
                      adore it?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductSlider title="Similar Products" />
    </>
  );
}
