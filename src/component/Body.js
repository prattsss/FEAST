import { useEffect, useState } from "react";
import RestaurantCard,{ promotedRestaurants} from "./RestaurantCard";
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

  const PromotedRestaurants = promotedRestaurants(RestaurantCard );

  function handleSearch() {
    const data = searchResult(searchInput, restaurantData);
    setFilteredRestaurants(data);
  }
  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    const json = restaurantLocalData;

    setRestaurantData(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants   
    );
    setFilteredRestaurants(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );

  }
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <div> 🔴No Internet Connection</div>
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
    
            {restaurantData.map((restaurant) => {
              return(
                <RestaurantCard key={restaurant.info.id} {...restaurant.info} /> 
             
              );
            })}
          </>
        ) : (
          filteredRestaurants.map((restaurant) =>  restaurant.info.promoted ? (<PromotedRestaurants key={restaurant.info.id} {...restaurant.info}/>) : (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
