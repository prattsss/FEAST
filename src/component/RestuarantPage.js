
import { useParams } from "react-router-dom";
import { imgCdn } from "./Constant";
import useRestaurant from "../utils/useRestuarant";
import './restaurantpage.css';
const RestaurantPage = () => {
  const { restId } = useParams();


  const { restaurant } = useRestaurant(restId);

  if (!restaurant) return null
  return (
    <div className="restuarant-page">
      <div className="border-x-2 border-y-2 p-2 rounded-[5px] border-[#333333]">
        <img src={imgCdn + restaurant.cloudinaryImageId} />
        <h1 className="text-xl font-semibold mt-2">{restaurant.name}</h1>
        <h1 className="font-light text-sm -mt-1 mb-2">{restaurant.areaName}, {restaurant.city}</h1>
        <div className="flex justify-between"> 
          <h2> {restaurant.costForTwo/100}RS for Two</h2>
          <h2 className="flex flex-wrap ">{restaurant.cuisines.join(", ")}</h2>
          </div>


      </div>
    </div>
  )
}
export default RestaurantPage