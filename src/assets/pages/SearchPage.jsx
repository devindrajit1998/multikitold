import React from "react";
import CategorySlider from "../components/CategorySlider";
import { useSelector } from "react-redux";

export default function SearchPage() {
  const searchData = useSelector((state) => state.searchSlice.searchResults);
  console.log("searchData", searchData?.data);
  return (
    <>
      <section className="mb-4">
        <div className="custom-container">
          <div className="title mb-10">
            <h4>
              Recent searches
            </h4>
          </div>
          <ul className="search-suggestion-list">
            <li>
              <a href="#" className="search-box">
                <h5 className="clamped_1">
                  OnePlus 11 Pro (Emerald Green, 256 GB)
                </h5>
                <i className="fa-sharp fa-thin fa-xmark" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <CategorySlider />
    </>
  );
}
