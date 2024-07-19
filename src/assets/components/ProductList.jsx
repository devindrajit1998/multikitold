import React from "react";
import { useSelector } from "react-redux";
import { json, Link, useNavigate } from "react-router-dom";

export default function ProductList() {
  const product = useSelector((state) => state.productSlice.products);
  const navigate = useNavigate();

  const handleNavigate = (items) => {
    navigate(`/details/${items?.attributes?.slug}`, {
      state: { items },
    });
  };

  console.log(`ProductList`, product);
  return (
    <>
      <section className="section-t-space-4">
        <div className="custom-container">
          <ul className="product-offer-list">
            {product?.data?.map((items) => {
              // products?.data[0]?.attributes?.products?.data
              return (
                <>
                  <li key={items?.id}>
                    {/* <Link to="/details/slug">  */}
                    <div
                      className="product-box pointer"
                      onClick={() => handleNavigate(items)}
                    >
                      <div className="product-image">
                        <img
                          src={
                            items?.attributes?.thumbnail?.data?.attributes?.url
                          }
                          className="img-fluid"
                          alt
                        />
                      </div>
                      <div className="product-content">
                        <div>
                          <h5 className="name clamped_1">
                            {items?.attributes?.name}
                          </h5>
                          <h5 className="category">
                            {
                              items?.attributes?.category?.data?.attributes
                                ?.name
                            }
                          </h5>
                          <h5 className="price">
                            ₹
                            {(
                              items?.attributes?.price -
                              (items?.attributes?.price *
                                items?.attributes?.offer) /
                                100
                            ).toFixed(0)}
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
                    {/* </Link> */}
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
