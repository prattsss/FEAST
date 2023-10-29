// import React from "react"
// const Contact = () => {
//   return (
//     <div className="contact">
//       <h1>Contact</h1>
//       <h2>38203723040</h2>
//     </div>
//   )
// }
// export default Contact
import useRestaurantData from "../utils/useRestuarantData";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Searchbar from "./Searchbar";



const contact = () => {
  const restaurantData = useRestaurantData()
  if (!restaurantData) return null;

  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
    <Searchbar/>
      <div className="restaurant-list">
      {restaurantData.map((restaurant) => {
              return (
                <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
              );
            })}
      </div>
    </>
  );
};

export default contact;
