import React from "react";
import { useSelector } from "react-redux";

export default function ProductList() {
  const products = useSelector((state) => state.productSlice.products);

  return (
    <>
      <section className="section-t-space-4">
        <div className="custom-container">
          <ul className="product-offer-list">
            {products?.data?.[0]?.attributes?.products?.data?.map((items) => {
              // products?.data[0]?.attributes?.products?.data
              return (
                <>
                  <li key={items?.id}>
                    <div className="product-box">
                      <a href="#" className="product-image">
                        <img
                          src={
                            items?.attributes?.thumbnail?.data?.attributes?.url
                          }
                          className="img-fluid"
                          alt
                        />
                      </a>
                      <div className="product-content">
                        <div>
                          <a href="#">
                            <h5 className="name clamped_1">
                              {items?.attributes?.name}
                            </h5>
                          </a>
                          <h5 className="category">
                            {
                              items?.attributes?.category?.data?.attributes
                                ?.name
                            }
                          </h5>
                          <h5 className="price">
                            ₹
                            {(items?.attributes?.price -
                              (items?.attributes?.price *
                                items?.attributes?.offer) /
                                100).toFixed(0)}
                          </h5>
                        </div>
                        <div>
                          <div className="add-quantity btn">
                            <span className="add-btn">
                              <i class="fa-sharp fa-light fa-plus" />
                            </span>
                            <span className="remove-minus count-decrease">
                              -
                            </span>
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
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
