import React from "react";

export default function DiscountBanner() {
  return (
    <>
      <section className="section-t-space-4 grocery-banner-section">
        <div className="custom-container">
          <div className="banner-box">
            <img
              src="images/grocery/banner/3.jpg"
              className="img-fluid"
              alt
            />
            <div className="banner-content p-center justify-content-between w-100">
              <div>
                <h4 className="text-white">Bigger</h4>
                <h4 className="text-white mb-0">Discounts</h4>
              </div>
              <div>
                <a href="shop.html" className="btn grocery-btn white-btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
