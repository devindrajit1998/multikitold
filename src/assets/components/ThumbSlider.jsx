import React from "react";

export default function ThumbSlider(props) {
  const images = props.images;
  // console.log(images);
  return (
    <>
      {/* main swiper, pass thumbs swiper as CSS selector */}

      <swiper-container thumbs-swiper=".my-thumbs">
        {images?.map((items) => {
          return (
            <swiper-slide>
              <div className="main-product">
                <img src={items?.attributes?.url} className="img-fluid" />
              </div>
            </swiper-slide>
          );
        })}
      </swiper-container>

      {/* thumbs swiper */}

      <swiper-container
        class="my-thumbs mt-4"
        slides-per-view="4"
        space-between="20"
        loop="true"
      >
        {images?.map((items) => {
          return (
            <swiper-slide>
              <div className="main-product">
                <img src={items?.attributes?.url} className="img-fluid" />
              </div>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </>
  );
}
