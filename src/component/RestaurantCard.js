import { Link } from "react-router-dom";
import { imgCdn } from "./Constant";
const RestaurantCard = (restaurants) => {
  const { cloudinaryImageId, name, areaName, cuisines, id, avgRating } = restaurants;
  return (
    <Link to={"/restaurant/" + id}>
      <div className="restaurant-card w-[24vw] flex-row align-middle  overflow-hidden gap-5 mb-11 p-1 border-x-2 border-y-2 border-gray-700 h-[58vh] rounded-md
      hover:bg-[#EDD5CB] max-sm:w-[35vh]
      sm:w-[45vh] md:w-[36vh] lg:w-[38vh]">
        <img className="w-full h-[35vh] rounded-md object-cover " alt="restaurant food" src={imgCdn + "" + cloudinaryImageId} />
        <div className="info p-1">
          <h2 className="text-xl font-semibold my-2 font-[roboto]">{name}</h2>
          <h2 className="text-lg font-medium">{areaName}</h2>
          {/* <h3 className="cuisines">{cuisines.join(",")}</h3> */}
          <h3>{avgRating}⭐</h3>
        </div>

      </div>
    </Link>

  )
}

export const promotedRestaurants = (RestaurantCard) => {
  return (restaurant) => {
    return (
      <div>
        <label className="absolute px-2 py-1 rounded-tl-sm rounded-br-lg bg-[#EDD5CB]">Promoted</label>
        <RestaurantCard {...restaurant} />
      </div>
    )
  }
}


export default RestaurantCard



