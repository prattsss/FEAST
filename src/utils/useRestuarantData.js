import React,{useEffect,useState} from "react";
const useRestaurantData = ()=>{
  const [restaurantData, setRestaurantData] = useState([]);
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
  }
  return restaurantData
}
export default useRestaurantData