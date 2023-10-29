import { Link } from "react-router-dom";
import { imgCdn } from "./Constant";
const RestaurantCard = (restaurants) => {
  const { cloudinaryImageId, name, areaName, cuisines, id } = restaurants;
  return (
    <Link to={"/restaurant/" + id}>
      <div className="restaurant-card">
        <img alt="restaurant food" src={imgCdn + "" + cloudinaryImageId} />
        <div className="info">
          <h2 className="r-name">{name}</h2>
          <h2 className="r-area">{areaName}</h2>
          <h3 className="cuisines">{cuisines.join(",")}</h3>
        </div>

      </div>
    </Link>

  )
}

export default RestaurantCard



