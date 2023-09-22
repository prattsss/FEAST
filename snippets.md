import { restaurantList } from "./constant";
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";

function searchResult(searchInput, restaurantData) {
return restaurantData.filter((restaurant) =>
restaurant.name.toLowerCase().includes(searchInput.toLowerCase())
);
}

const Body = () => {
const [searchInput, setSearchInput] = useState('');
const [filteredRestaurants, setFilteredRestaurants] = useState([]);
const restaurantData = restaurantList;
console.log(restaurantData)

const handleSearch = () => {
const data = searchResult(searchInput, restaurantData);
setFilteredRestaurants(data);
};

const resetSearch = () => {
setFilteredRestaurants([]); // Reset filtered data to empty array
setSearchInput(''); // Clear search input
};

useEffect(() => {
apiCall()
}, [])
async function apiCall() {
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.61583319140582&lng=75.8019981533289&page_type=DESKTOP_WEB_LISTING")
const json = await data.json();
console.log(json)
}
return (
<>

<div className="search-container">
<input
placeholder="Search"
type="text"
value={searchInput}
onChange={(e) => setSearchInput(e.target.value)}
/>
<button className="btn" onClick={handleSearch}>Search</button>
<button className="btn" onClick={resetSearch}>Reset</button>
</div>
<div className="restaurant-list">
{
restaurantList.map((restaurant) => (
<RestaurantCard key={restaurant.info.id} {...restaurant.info} />
))
}
</div>
</>

)
}

export default Body;

