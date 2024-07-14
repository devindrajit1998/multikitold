import React from "react";

export default function OfferSection() {
  return (
    <>
      <section className="section-t-space-4">
        <div className="custom-container">
          <div className="title d-flex align-items-center justify-content-between">
            <h4>Say hello to Offers!</h4>
            <a href="shop.html" className="theme-color h5">
              See all
            </a>
          </div>
          <ul className="product-offer-list">
            <li>
              <div className="product-box">
                <a href="#" className="product-image">
                  <img
                    src="images/grocery/product/15.png"
                    className="img-fluid"
                    alt
                  />
                </a>
                <div className="product-content">
                  <div>
                    <a href="#">
                      <h5 className="name">Assorted Capsicum Combo</h5>
                    </a>
                    <h5 className="category">Fruit</h5>
                    <h5 className="price">
                      $25.00 <span>/kg</span>
                    </h5>
                  </div>
                  <div>
                    <div className="add-quantity btn">
                      <span className="add-btn">
                        <i class="fa-sharp fa-light fa-plus"/>
                      </span>
                      <span className="remove-minus count-decrease">-</span>
                      <input
                        className="countdown-remove"
                        type="number"
                        defaultValue={0}
                      />
                      <span className="count-increase">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-box">
                <a href="#" className="product-image">
                  <img
                    src="images/grocery/product/12.png"
                    className="img-fluid"
                    alt
                  />
                </a>
                <div className="product-content">
                  <div>
                    <a href="#">
                      <h5 className="name">Assorted Capsicum Combo</h5>
                    </a>
                    <h5 className="category">Fruit</h5>
                    <h5 className="price">
                      $25.00 <span>/kg</span>
                    </h5>
                  </div>
                  <div>
                    <div className="add-quantity btn">
                      <span className="add-btn">
                        <i class="fa-sharp fa-light fa-plus"/>
                      </span>
                      <span className="remove-minus count-decrease">-</span>
                      <input
                        className="countdown-remove"
                        type="number"
                        defaultValue={0}
                      />
                      <span className="count-increase">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-box">
                <a href="#" className="product-image">
                  <img
                    src="images/grocery/product/13.png"
                    className="img-fluid"
                    alt
                  />
                </a>
                <div className="product-content">
                  <div>
                    <a href="#">
                      <h5 className="name">Assorted Capsicum Combo</h5>
                    </a>
                    <h5 className="category">Fruit</h5>
                    <h5 className="price">
                      $25.00 <span>/kg</span>
                    </h5>
                  </div>
                  <div>
                    <div className="add-quantity btn">
                      <span className="add-btn">
                        <i class="fa-sharp fa-light fa-plus"/>
                      </span>
                      <span className="remove-minus count-decrease">-</span>
                      <input
                        className="countdown-remove"
                        type="number"
                        defaultValue={0}
                      />
                      <span className="count-increase">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
