import React, { useEffect, useState } from "react";

const useRestaurant = (restId) => {
  const [restaurant, setRestaurant] = useState("")
  useEffect(() => {
    restaurantInfo()
  }, [])
  async function restaurantInfo() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`);
    const json = await data.json()
  

    setRestaurant(json?.data?.cards[0]?.card?.card?.info)
 
  }
  return {restaurant} || null

}
export default useRestaurant