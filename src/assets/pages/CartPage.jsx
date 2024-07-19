import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSingleItem } from "../redux/slices/CartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cartData = useSelector((state) => state.cartSlice.cartData);
  const dispatch = useDispatch();

  const handleRemoveSingle = (id) => {
    dispatch(removeSingleItem(id));
  };
  return (
    <>
      {cartData?.length > 0 ? (
        <>
          <section>
            <div className="custom-container">
              <ul className="cart-box-list">
                {cartData?.map((items) => {
                  return (
                    <li key={items.id}>
                      <div className="cart-box">
                        <div className="cart-left-box">
                          <a href="#" className="product-image">
                            <img
                              src={
                                items?.attributes?.thumbnail?.data?.attributes
                                  ?.url
                              }
                              className="img-fluid"
                              alt
                            />
                          </a>
                          <div className="product-name">
                            <h5 className="clamped_1">
                              {items?.attributes?.name}
                            </h5>
                            <h6>500g</h6>
                          </div>
                        </div>
                        <div className="cart-right-box">
                          <h5>
                            ₹
                            {items?.attributes?.price -
                              (
                                items?.attributes?.price *
                                items?.attributes?.offer *
                                0.01
                              ).toFixed(0)}
                          </h5>
                          <button
                            className="remove-button btn"
                            onClick={() => handleRemoveSingle(items?.id)}
                          >
                            <i class="fa-thin fa-trash" />
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
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
      ) : (
        <>
          <section>
            <div className="empty-cart-container">
              {/* <img
          src="empty-cart.png"
          alt="Empty Cart"
          className="empty-cart-image"
        /> */}
              <h1 className="empty-cart-title">Your Cart is Empty</h1>
              <p className="empty-cart-text">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link to="/" className="shop-now-button">HOME</Link>
            </div>
          </section>
        </>
      )}
    </>
  );
}
