import React from "react";

export default function ThumbSlider(props) {
  return (
    <>
      {/* main swiper, pass thumbs swiper as CSS selector */}

      <swiper-container thumbs-swiper=".my-thumbs">
        <swiper-slide>
          <div className="main-product">
            <img src="" className="img-fluid" />
          </div>
        </swiper-slide>
      </swiper-container>

      {/* thumbs swiper */}

      <swiper-container
        class="my-thumbs mt-4"
        slides-per-view="2"
        space-between="20"
        loop="true"
      >
        <swiper-slide>
          <div className="main-product">
            <img src="" className="img-fluid" />
          </div>
        </swiper-slide>
      </swiper-container>
    </>
  );
}
