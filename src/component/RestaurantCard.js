const RestaurantCard = (restaurants) => {
  const { cloudinaryImageId, name, areaName, cuisines } = restaurants;
  return (
    <div className="restaurant-card">
      <img alt="restaurant food" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId} />
      <div className="info">
        <h2 className="r-name">{name}</h2>
        <h2 className="r-area">{areaName}</h2>
        <h3 className="cuisines">{cuisines.join(",")}</h3>
      </div>

    </div>

  )
}

export default RestaurantCard



