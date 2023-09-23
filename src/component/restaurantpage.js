import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { imgCdn } from "./constant";
import './restaurantpage.css'
const RestaurantPage = () => {
  const { restId } = useParams();

  const [restaurant, setRestaurant] = useState("")
  const [restMenu, setRestMenu] = useState([])

  useEffect(() => {
    restaurantInfo()
  }, [])
  async function restaurantInfo() {
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.61583319140582&lng=75.8019981533289&restaurantId="+{restId}+"&catalog_qa=undefined&submitAction=ENTER")
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.61583319140582&lng=75.8019981533289&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`);

    const json = await data.json()
    setRestaurant(json?.data?.cards[0]?.card?.card?.info)
    setRestMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
  }
  return (
    <div className="restuarant-page">
      <div>
        <img src={imgCdn + restaurant.cloudinaryImageId} />
        <h1>{restaurant.name}</h1>
      </div>
      <div>
        <h2>Menu</h2>
        <ul className="menu-list">
          {restMenu.map((el) => (
            <li key={el?.card?.info?.id}>{el?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default RestaurantPage