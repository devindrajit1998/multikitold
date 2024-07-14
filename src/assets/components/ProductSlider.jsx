import React from "react";

export default function ProductSlider(props) {
  return (
    <>
      <section className="section-t-space-4">
        <div className="title title-2 px-15">
          <h4>{props.title}</h4>
          <a href="shop.html" className="theme-color">
            See all
          </a>
        </div>
        <div className="swiper slider-2-3 product-slider px-15">
          <swiper-container
            slides-per-view="3"
            speed="500"
            loop="true"
            space-between="10"
          >
            <swiper-slide>
              <div className="product-box">
                <a href="#" className="product-image">
                  <img
                    src="images/grocery/product/10.png"
                    className="img-fluid"
                    alt
                  />
                </a>
                <div className="product-content">
                  <div>
                    <a href="#" className="name">
                      <h5>Grapes - Bangalore Blue with Seed</h5>
                    </a>
                    <h6>500g</h6>
                    <div className="price-box">
                      <h5>$25.00</h5>
                      <div className="add-quantity add-cart btn">
                        <span className="add-btn">
                          <i class="fa-sharp fa-light fa-plus" />
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
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="product-box">
                <a href="#" className="product-image">
                  <img
                    src="images/grocery/product/10.png"
                    className="img-fluid"
                    alt
                  />
                </a>
                <div className="product-content">
                  <div>
                    <a href="#" className="name">
                      <h5>Grapes - Bangalore Blue with Seed</h5>
                    </a>
                    <h6>500g</h6>
                    <div className="price-box">
                      <h5>$25.00</h5>
                      <div className="add-quantity add-cart btn">
                        <span className="add-btn">
                          <i class="fa-sharp fa-light fa-plus" />
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
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="product-box">
                <a href="#" className="product-image">
                  <img
                    src="images/grocery/product/10.png"
                    className="img-fluid"
                    alt
                  />
                </a>
                <div className="product-content">
                  <div>
                    <a href="#" className="name">
                      <h5>Grapes - Bangalore Blue with Seed</h5>
                    </a>
                    <h6>500g</h6>
                    <div className="price-box">
                      <h5>$25.00</h5>
                      <div className="add-quantity add-cart btn">
                        <span className="add-btn">
                          <i class="fa-sharp fa-light fa-plus" />
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
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="product-box">
                <a href="#" className="product-image">
                  <img
                    src="images/grocery/product/10.png"
                    className="img-fluid"
                    alt
                  />
                </a>
                <div className="product-content">
                  <div>
                    <a href="#" className="name">
                      <h5>Grapes - Bangalore Blue with Seed</h5>
                    </a>
                    <h6>500g</h6>
                    <div className="price-box">
                      <h5>$25.00</h5>
                      <div className="add-quantity add-cart btn">
                        <span className="add-btn">
                          <i class="fa-sharp fa-light fa-plus" />
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
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </section>
    </>
  );
}
