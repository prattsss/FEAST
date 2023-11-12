import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus"
import { restaurantLocalData } from "./config";


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
    // const data = await fetch(
    //   "https://www.swiggy.com/mapi/homepage/getCards?lat=22.7195687&lng=75.8577258"
    // );
    // const json = await data.json();
    // const trial = json?.data?.success?.cards.map(arr => {
    //   const dataNeeded = arr?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
    //   if (dataNeeded)
    //     return arr || null
    // });
    const json = restaurantLocalData;
   
    setRestaurantData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

  }
  const onlineStatus = useOnlineStatus();
  if(!onlineStatus) return <div> 🔴No Internet Connection</div>
  if (!restaurantData) return null;
 
  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
     
 
     
      <div className="search-container flex justify-center align-middle p-5">
        <input
          placeholder="Search"
          className="p-3 text-lg  border-x-2 border-y-2 border-r-0 rounded-tl-md rounded-bl-md border-gray-600 caret-green-400"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="py-1 px-2  bg-tranparent border-x-2 border-y-2 border-gray-600 active:bg-blue-100
        rounded-tr rounded-br" onClick={handleSearch}>
          Search
        </button>
        {/* <button className="btn" onClick={resetSearch}>Reset</button> */}
      </div>

      <div className="flex bg-blue-50 flex-wrap p-10 gap-10 align-middle justify-center">
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
