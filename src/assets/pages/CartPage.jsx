import React from "react";

export default function CartPage() {
  return (
    <>
      <section>
        <div className="custom-container">
          <ul className="cart-box-list">
            <li>
              <div className="cart-box">
                <div className="cart-left-box">
                  <a href="#" className="product-image">
                    <img
                      src="images/grocery/product/15.png"
                      className="img-fluid"
                      alt
                    />
                  </a>
                  <div className="product-name">
                    <h5>
                      <a href="#">Assorted Capsicum</a>
                    </h5>
                    <h6>500g</h6>
                  </div>
                </div>
                <div className="cart-right-box">
                  <h5>$25.00</h5>
                  <button className="remove-button btn">
                    <i class="fa-thin fa-trash" />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="cart-box">
                <div className="cart-left-box">
                  <a href="#" className="product-image">
                    <img
                      src="images/grocery/product/12.png"
                      className="img-fluid"
                      alt
                    />
                  </a>
                  <div className="product-name">
                    <h5>
                      <a href="#">Assorted Capsicum</a>
                    </h5>
                    <h6>500g</h6>
                  </div>
                </div>
                <div className="cart-right-box">
                  <h5>$25.00</h5>
                  <button className="remove-button btn">
                    <i class="fa-thin fa-trash" />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="cart-box">
                <div className="cart-left-box">
                  <a href="#" className="product-image">
                    <img
                      src="images/grocery/product/11.png"
                      className="img-fluid"
                      alt
                    />
                  </a>
                  <div className="product-name">
                    <h5>
                      <a href="#">Assorted Capsicum</a>
                    </h5>
                    <h6>500g</h6>
                  </div>
                </div>
                <div className="cart-right-box">
                  <h5>$25.00</h5>
                  <button className="remove-button btn">
                    <i class="fa-thin fa-trash" />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="cart-box">
                <div className="cart-left-box">
                  <a href="#" className="product-image">
                    <img
                      src="images/grocery/product/14.png"
                      className="img-fluid"
                      alt
                    />
                  </a>
                  <div className="product-name">
                    <h5>
                      <a href="#">Assorted Capsicum</a>
                    </h5>
                    <h6>500g</h6>
                  </div>
                </div>
                <div className="cart-right-box">
                  <h5>$25.00</h5>
                  <button className="remove-button btn">
                    <i class="fa-thin fa-trash" />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="cart-box">
                <div className="cart-left-box">
                  <a href="#" className="product-image">
                    <img
                      src="images/grocery/product/14.png"
                      className="img-fluid"
                      alt
                    />
                  </a>
                  <div className="product-name">
                    <h5>
                      <a href="#">Assorted Capsicum</a>
                    </h5>
                    <h6>500g</h6>
                  </div>
                </div>
                <div className="cart-right-box">
                  <h5>$25.00</h5>
                  <button className="remove-button btn">
                    <i class="fa-thin fa-trash" />
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="cart-box">
                <div className="cart-left-box">
                  <a href="#" className="product-image">
                    <img
                      src="images/grocery/product/14.png"
                      className="img-fluid"
                      alt
                    />
                  </a>
                  <div className="product-name">
                    <h5>
                      <a href="#">Assorted Capsicum</a>
                    </h5>
                    <h6>500g</h6>
                  </div>
                </div>
                <div className="cart-right-box">
                  <h5>$25.00</h5>
                  <button className="remove-button btn">
                    <i class="fa-thin fa-trash" />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="bottom-space">
        <div className="custom-container">
          <div className="title mb-0">
            <h4>Order Details</h4>
          </div>
          <ul className="order-details-list">
            <li>
              Bag total <span>$220.00</span>
            </li>
            <li>
              Bag savings <span className="success">-$20.00</span>
            </li>
            <li>
              Delivery <span>$50.00</span>
            </li>
            <li>
              Total Amount <span>$270.00</span>
            </li>
          </ul>
        </div>
      </section>

      <div className="checkout-button-box">
        <a href="#" className="grocery-btn theme-btn">
          Proceed to Checkout
        </a>
      </div>
    </>
  );
}
