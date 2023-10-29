import React, { useState } from 'react'
import useRestaurantData from '../utils/useRestuarantData';


function searchResult(searchInput, restaurantData) {
  return restaurantData.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
  );
}
const Searchbar = () => {
  const restaurantData = useRestaurantData();
  const [searchInput, setSearchInput] = useState("");
  function handleSearch() {
    const data = searchResult(searchInput, restaurantData);
  }
  return (
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
    </div>
  )
}
export default Searchbar