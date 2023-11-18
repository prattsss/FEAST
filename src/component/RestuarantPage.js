
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestuarant";
import RestaurantMenu from "./RestaurantMenu";
const RestaurantPage = () => {
  const { restId } = useParams();


  const { restaurant, menuList } = useRestaurant(restId);
  // console.log(restaurant)
  const [showIndex, setShowIndex] = useState(0)
  if (!restaurant) return null
  return (
    <>
      <div className="flex justify-between w-6/12  mx-auto my-3 border-b-2 border-dashed p-3 ">
        <div className="my-auto">
          <h1 className="text-md font-semibold mt-2">{restaurant.name}</h1>
          <h2 className=" ">{restaurant.cuisines.join(", ")}</h2>
          <h2> {restaurant.costForTwo / 100}RS for Two</h2>
          <h1 className="font-light text-sm -mt-1 mb-2">{restaurant.areaName}, {restaurant.city}</h1>
        </div>
        <div className="flex-row my-auto text-xl text-center p-2 border-x-2 border-y-2 border-green-200 rounded-lg">
          <h1 className="font-medium border-b pb-1">Rating</h1>
          <h2 className=" pt-1 text-green-800 font-medium text-xl">{restaurant.avgRating}⭐</h2>
        </div>
      </div>

      {menuList.map((list, index) => <RestaurantMenu key={index} name={restaurant.name}
        menu={list?.card?.card} showMenu={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)} />)}
    </>
  )
}
export default RestaurantPage