import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function BannerSlider() {
  const bannerData = useSelector((state) => state.commonSlice.bannerData);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  return (
    <>
      <section className="section-t-space-4 grocery-banner-section">
        <div className="swiper banner-slider px-15 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <swiper-container
            slides-per-view="1"
            speed="500"
            loop="true"
            space-between="10"
          >
            {bannerData?.data?.map((items) => {
              console.log(items);
              return (
                <>
                  <swiper-slide key={items?.id}>
                    <div className="banner-box">
                      <img
                        src={
                          items?.attributes?.image?.data?.attributes?.url
                        }
                        className="img-fluid"
                        alt
                      />
                      <div className="banner-content p-center-left">
                        <div>
                          <h4>{items?.attributes.title}</h4>
                          <h5>{items?.attributes.subtitle}</h5>
                          <Link
                            to="/shop"
                            className="btn grocery-btn theme-btn"
                          >
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                </>
              );
            })}
          </swiper-container>
        </div>
      </section>
    </>
  );
}
