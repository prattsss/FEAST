import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

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
      "https://www.swiggy.com/mapi/homepage/getCards?lat=22.61583319140582&lng=75.8019981533289"
    );
    const json = await data.json();
    setRestaurantData(
      json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );  
  //   const trial = json?.data?.success?.cards;
  //   const main = trial.map(arr => {
  //   const nulled = Object.values(arr).map(elem=>{
  //     const level2 = Object.values(elem).map(a => Object.keys(a));
  //     console.log(level2)
  //    return  level2
  //     })
  //     return nulled
  // })
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
