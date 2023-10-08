import { restaurantList } from "./constant";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

function searchResult(searchInput, restaurantData) {
  return restaurantData.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);

  function handleSearch() {
    const data = searchResult(searchInput, restaurantData);

    setFilteredRestaurants(data);
  }
  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.61583319140582&lng=75.8019981533289&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
  
    setRestaurantData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json?.data?.cards)
  }
  if (!restaurantData) return null;

  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          placeholder="Search"
          className="search-input"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
        {/* <button className="btn" onClick={resetSearch}>Reset</button> */}
      </div>


      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <>
            {" "}
            <h1>NO Matches Found!</h1>
            {restaurantData.map((restaurant) => {
              return (
                <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
              );
            })}
          </>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
