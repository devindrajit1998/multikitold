import React, { useEffect } from "react";
import ThumbSlider from "../components/ThumbSlider";
import ProductSlider from "../components/ProductSlider";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export default function DetailsPage() {
  const location = useLocation();

  const { items } = location.state || {};
  console.log("location: " + items);
  return (
    <>
      <section className="main-product-section">
        <div className="slider-box">
          <div className="custom-container">
            <div className="product-slider-box">
              <ThumbSlider />
            </div>
          </div>
        </div>
        <div className="product-container px-15">
          <h4>Assorted Capsicum Combo - (Red, Yellow, Green)</h4>
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
            $25.00 <del>$45.00</del>
          </h3>
          <button class="btn grocery-btn theme-btn mt-4">Shop Now</button>
        </div>
      </section>

      <section className="section-t-space-3">
        <div className="custom-container">
          {/* <ul className="dropdown-list-box">
            <li>
              <div className="dropdown dropdown-box">
                <button
                  className="btn dropdown-button dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  500 g / $24.00
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#!">
                      250 g / $19.25
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      750 g / $29.55
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      1 kg / $50.36
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown dropdown-box">
                <button
                  className="btn dropdown-button dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Delivery Time
                </button>
                <ul className="dropdown-menu" style={{}}>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Monday Morning
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Today 06:00 PM
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Tomorrow 11:00 AM
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul> */}
          <div className="description-box">
            <div className="title">
              <h4>Description</h4>
              <p>
                Refillable, Reusable, High Quality Glass Roll on Bottles with
                Silver cap For Essential Oil Blends DIY Perfume Cosmetics Beauty
                Products Ideal
              </p>
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
                      Every taste of Italian cuisine served with a grin is a
                      celebration. One day at a time, our goal is to make you
                      happy and provide you with a delicious supper. Why not
                      adore it?
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
