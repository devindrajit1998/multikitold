import React from "react";
import CategorySlider from "../components/CategorySlider";
import BannerSlider from "../components/BannerSlider";
import ProductSlider from "../components/ProductSlider";
import DiscountBanner from "../components/DiscountBanner";
import OfferSection from "../components/OfferSection";

export default function HomePage() {
  return (
    <>
      <CategorySlider />
      <BannerSlider />
      <ProductSlider title="Lowest Price" />
      <ProductSlider title="Everyday Essentials" />
      <DiscountBanner />
      <OfferSection />
    </>
  );
}
