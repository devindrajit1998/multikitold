import React, { useEffect, useState } from "react";
import { dataSearch, searchResults } from "../redux/slices/SearchSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBar() {
  const searchData = useSelector((state) => state.searchSlice.searchResults);
  const [query, setQuery] = useState({
    searchTerm: "",
    recentSearchTerms: "",
  });

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const searchTerm = e.target.value;
    setQuery((prevItem) => {
      return {
        ...prevItem,
        searchTerm: searchTerm,
      };
    });
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    dispatch(dataSearch({ query: query.searchTerm }));
  };

  useEffect(() => {
    if (query.searchTerm !== "") {
      dispatch(dataSearch({ query: query.searchTerm }));
    } else {
      dispatch(searchResults());
    }
  }, [query.searchTerm]);

  console.log(query.searchTerm);

  return (
    <>
      {/* Search Section Start */}
      <section>
        <div className="custom-container">
          <form className="form-style-7" onSubmit={searchSubmit}>
            <div className="form-box search-box mb-19">
              <input
                type="search"
                className="form-control"
                placeholder="Search here.."
                value={query.searchTerm}
                onChange={handleOnChange}
              />
              <i className="fa-thin fa-magnifying-glass" />
            </div>
          </form>
        </div>
      </section>
      {searchData?.data?.length > 0 ? (
        <>
          <section className="mb-4 search_sugg">
            <div className="custom-container">
              <div className="title mb-10">
                <h4>Suggestions</h4>
              </div>
              <ul className="search-suggestion-list">
                {searchData?.data?.map((items) => {
                  return (
                    <li key={items.id}>
                      <a href="#" className="search-box">
                        <h5 className="clamped_1">{items.attributes.name}</h5>
                        <i className="fa-sharp fa-thin fa-xmark" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* <section className="mb-4 search_sugg">
            <div className="custom-container">
              <div className="title mb-10">
                <h4>Suggestions</h4>
              </div>
              <ul className="search-suggestion-list">
                <li>
                  <a href="#" className="search-box">
                    <h5 className="clamped_1">No result found!</h5>
                  </a>
                </li>
              </ul>
            </div>
          </section> */}
        </>
      )}
      {/* Search Section End */}
    </>
  );
}
