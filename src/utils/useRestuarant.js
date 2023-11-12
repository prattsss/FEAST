import React, { useEffect, useState } from "react";

const useRestaurant = (restId) => {

  const [restaurant, setRestaurant] = useState("")
  const [restMenu, setRestMenu] = useState([])
  useEffect(() => {
    restaurantInfo()
  }, [])
  async function restaurantInfo() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${restId}304902&catalog_qa=undefined&submitAction=ENTER`)
    // const data = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.61583319140582&lng=75.8019981533289&restaurantId=${restId}&submitAction=ENTER`);
    const json = await data.json()
    console.log(json);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info)
    setRestMenu(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
  }
  return { restaurant, restMenu } || null

}
export default useRestaurant